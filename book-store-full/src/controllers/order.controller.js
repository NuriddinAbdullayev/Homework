import Order from "../models/order.model.js";
import Book from "../models/book.model.js";

export const createOrder = async (req, res, next) => {
  try {
    const { userId, bookId, quantity } = req.body;

    const existing = await Order.findOne({ userId, bookId, status: "PENDING" });
    if (existing) throw { statusCode: 400, message: "Siz bu kitobni allaqachon buyurtma qilgansiz" };

    const book = await Book.findById(bookId);
    if (!book) throw { statusCode: 404, message: "Kitob topilmadi" };

    if (book.stock < quantity) throw {
      statusCode: 400,
      message: `Kitob yetarli emas, mavjud: ${book.stock} ta`
    };

    book.stock -= quantity;
    await book.save();

    const order = await Order.create({
      userId, bookId, quantity,
      totalPrice: quantity * book.price
    });

    res.status(201).json({ data: order, message: "Buyurtma muvaffaqiyatli yaratildi" });
  } catch (e) { next(e); }
};

export const cancelOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) throw { statusCode: 404, message: "Buyurtma topilmadi" };

    if (order.status !== "PENDING") throw { statusCode: 400, message: "Bekor qilib bo'lmaydi" };

    const book = await Book.findById(order.bookId);
    book.stock += order.quantity;
    await book.save();

    order.status = "CANCELLED";
    await order.save();

    res.json({ data: order, message: "Buyurtma bekor qilindi" });
  } catch (e) { next(e); }
};
