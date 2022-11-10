import { createAsyncThunk } from '@reduxjs/toolkit';

import { addBooks, getBooks } from '../../api/bookstoreApi';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const asyncAddBook = createAsyncThunk(
  ADD_BOOK,
  addBooks,
);

const asyncGetBooks = createAsyncThunk(
  GET_BOOKS,
  getBooks,
);

export default asyncAddBook;
export { asyncGetBooks };
