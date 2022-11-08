import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './categories/categories';
import booksReducer from './books/Books';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
