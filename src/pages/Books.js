import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import NewBookForm from '../components/NewBookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  const bookList = books.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
    />
  ));
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {bookList}
      </ul>
      <NewBookForm />
    </div>
  );
};

export default Books;
