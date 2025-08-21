import express from "express";
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.route("/")
  .get(getBooks)
  .post(createBook);

router.route("/:id")
  .put(updateBook)
  .delete(deleteBook);

export default router;
