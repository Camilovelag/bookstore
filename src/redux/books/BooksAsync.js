import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiAddBooks, apiGetBooks, apiDeleteBooks } from '../../api/bookstoreApi';

const ASYNC_ADD_BOOK = 'bookstore/books/ASYNC_ADD_BOOK';
const ASYNC_DELETE_BOOK = 'bookstore/books/ASYNC_DELETE_BOOK';
const ASYNC_GET_BOOKS = 'bookstore/books/ASYNC_GET_BOOKS';

const asyncAddBook = createAsyncThunk(
  ASYNC_ADD_BOOK,
  apiAddBooks,
);

const asyncGetBooks = createAsyncThunk(
  ASYNC_GET_BOOKS,
  apiGetBooks,
);

const asyncDeleteBook = createAsyncThunk(
  ASYNC_DELETE_BOOK,
  apiDeleteBooks,
);

export default asyncAddBook;
export { asyncGetBooks, asyncDeleteBook };
