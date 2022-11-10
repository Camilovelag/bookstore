const LOAD_BOOK = 'bookstore/books/LOAD_BOOK';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOK:
      return action.payload;

    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const loadBooks = (payload) => ({
  type: LOAD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export { loadBooks, removeBook, addBook };
export default booksReducer;
