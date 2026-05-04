import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  price: { type: Number, min: 0 },
  stock: { type: Number, default: 0 },
  category: String
}, { timestamps: true });

export default mongoose.model("Book", schema);
