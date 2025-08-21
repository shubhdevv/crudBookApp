import Book from "../models/Book.js";

// @desc   Get all books
// @route  GET /api/books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc   Create new book
// @route  POST /api/books
export const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;

    const newBook = new Book({ title, author, publishedYear, genre });
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: "Invalid Data" });
  }
};

// @desc   Update book
// @route  PUT /api/books/:id
export const updateBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, publishedYear, genre },
      { new: true }
    );

    if (!updatedBook) return res.status(404).json({ message: "Book not found" });

    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

// @desc   Delete book
// @route  DELETE /api/books/:id
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book removed" });
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
