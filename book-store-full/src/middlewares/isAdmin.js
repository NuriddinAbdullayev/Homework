import User from "../models/user.model.js";

export default async (req, res, next) => {
  const user = await User.findById(req.headers.userid);
  if (!user || user.role !== "ADMIN") {
    return res.status(403).json({
      statusCode: 403,
      message: "Faqat ADMIN"
    });
  }
  next();
};
