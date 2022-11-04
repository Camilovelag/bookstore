import React from 'react';
import Book from '../components/Book';
import BookList from '../components/BookList';
import NewBookForm from '../components/NewBookForm';

const Books = () => (
  <div>
    <h1>Books</h1>
    <p>Books will go here</p>
    <Book />
    <BookList />
    <NewBookForm />
  </div>
);

export default Books;
