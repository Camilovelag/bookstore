import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/Books';

import asyncAddBook from '../redux/books/BooksAsync';

const initialState = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};

const NewBookForm = () => {
  const [newBook, setNewBook] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
      item_id: uuid(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncAddBook(newBook));
    dispatch(addBook(newBook));
    e.target.reset();
  };

  return (
    <div>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} placeholder="Book title" />
        <input type="text" name="author" onChange={handleChange} placeholder="Book author" />
        <input type="text" name="category" onChange={handleChange} placeholder="Book category" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBookForm;
