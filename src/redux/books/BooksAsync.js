import { createAsyncThunk } from '@reduxjs/toolkit';

import { addBooks, deleteBooks, getBooks } from '../../api/bookstoreApi';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const asyncAddBook = createAsyncThunk(
  ADD_BOOK,
  addBooks,
);

const asyncGetBooks = createAsyncThunk(
  GET_BOOKS,
  getBooks,
);

const asyncDeleteBook = createAsyncThunk(
  DELETE_BOOK,
  deleteBooks,
);

export default asyncAddBook;
export { asyncGetBooks, asyncDeleteBook };
