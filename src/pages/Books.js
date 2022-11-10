import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { asyncGetBooks } from '../redux/books/BooksAsync';
import Book from '../components/Book';
import NewBookForm from '../components/NewBookForm';
import './Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(asyncGetBooks(dispatch));
  }, []);

  const bookList = books.map((book) => (
    <Book
      key={book.item_id}
      id={book.item_id}
      title={book.title}
      author={book.author}
      category={book.category}
    />
  ));
  return (
    <div className="books-container">
      <ul className="books-list">
        {bookList}
      </ul>
      <NewBookForm />
    </div>
  );
};

export default Books;
