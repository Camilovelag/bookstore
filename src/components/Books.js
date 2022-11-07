import React from 'react';
import Book from './Book';
import NewBookForm from './NewBookForm';

const Books = () => (
  <div>
    <h1>Books</h1>
    <Book title="Fahrenheit 451" author="Ray Bradbury" />
    <NewBookForm />
  </div>
);

export default Books;
