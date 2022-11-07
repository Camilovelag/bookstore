import { combineReducers} from 'redux';

import categoriesReducer from './categories/Categories';
import booksReducer from './books/Books';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
})

export default rootReducer;