const LOAD_BOOK = 'bookstore/books/LOAD_BOOK';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOK:
      return action.payload;

    case ADD_BOOK:
      return [...state, action.payload];

    case DELETE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

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

const deleteBook = (payload) => ({
  type: DELETE_BOOK,
  payload,
});

export { loadBooks, deleteBook, addBook };
export default booksReducer;
