import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  quantity: Number,
  totalPrice: Number,
  status: {
    type: String,
    enum: ["PENDING", "DELIVERED", "CANCELLED"],
    default: "PENDING"
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", schema);
