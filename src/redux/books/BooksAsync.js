import { createAsyncThunk } from '@reduxjs/toolkit';

import { addBooks } from '../../api/bookstoreApi';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const asyncAddBook = createAsyncThunk(
  ADD_BOOK,
  addBooks,
);

export default asyncAddBook;
