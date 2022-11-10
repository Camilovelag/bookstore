import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { asyncGetBooks } from '../redux/books/BooksAsync';
import Book from '../components/Book';
import NewBookForm from '../components/NewBookForm';
import './Books.css';
import BookProgress from '../components/BookProgress';
import BookChapter from '../components/BookChapter';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(asyncGetBooks(dispatch));
  }, []);

  const bookList = books.map((book) => (
    <div key={book.item_id} className="bookCard-container">
      <Book
        id={book.item_id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
      <BookProgress />
      <BookChapter />
    </div>
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
