import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const register = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, Number(process.env.BCRYPT_SALT_ROUNDS));
    const user = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      passwordHash: hash
    });

    res.json({ data: user, message: "Muvaffaqiyatli ro'yxatdan o'tdingiz" });
  } catch (e) { next(e); }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw { statusCode: 404, message: "User topilmadi" };

    const ok = await bcrypt.compare(req.body.password, user.passwordHash);
    if (!ok) throw { statusCode: 400, message: "Parol noto'g'ri" };

    res.json({ data: user, message: "Tizimga muvaffaqiyatli kirdingiz" });
  } catch (e) { next(e); }
};
