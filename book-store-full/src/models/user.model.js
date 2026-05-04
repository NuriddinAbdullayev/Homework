import mongoose from "mongoose";

const schema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("User", schema);
