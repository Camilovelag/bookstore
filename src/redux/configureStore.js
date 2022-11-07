import { combineReducers } from 'react-redux';

import categoriesReducer from './categories/categories';
import booksReducer from './books/Books';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

export default rootReducer;
