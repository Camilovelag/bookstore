import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import NewBookForm from './NewBookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <h1>Books</h1>
      <Book title={books[0].title} author={books[0].author} />
      <NewBookForm />
    </div>
  );
};

export default Books;
