const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
}

const addBook = () => ({
  type: ADD_BOOK,
});

const removeBook = () => ({
  type: REMOVE_BOOK,
});

export { addBook, removeBook};
export default booksReducer;