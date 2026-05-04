import mongoose from "mongoose";

export default (req, res, next) => {
  const id = req.params.id;
  if (id && !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      statusCode: 400,
      message: "Noto'g'ri ID"
    });
  }
  next();
};
