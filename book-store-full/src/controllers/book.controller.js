import Book from "../models/book.model.js";

export const getAll = async (req, res) => {
  const books = await Book.find();
  res.json({ data: books });
};

export const getOne = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ statusCode: 404, message: "Kitob topilmadi" });
  res.json({ data: book });
};

export const create = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json({ data: book });
};

export const update = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).json({ statusCode: 404, message: "Kitob topilmadi" });
  res.json({ data: book });
};

export const remove = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({ statusCode: 404, message: "Kitob topilmadi" });
  res.json({ message: "O'chirildi" });
};
