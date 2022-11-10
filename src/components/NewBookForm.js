import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { addBook } from '../redux/books/Books';
import asyncAddBook from '../redux/books/BooksAsync';
import './NewBookForm.css';

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
    <div className="newBookForm-container">
      <h2>ADD NEW BOOK</h2>
      <form className="newBookForm-form" onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} placeholder="Book title" required />
        <input type="text" name="author" onChange={handleChange} placeholder="Book author" required />
        <input type="text" name="category" onChange={handleChange} placeholder="Book category" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBookForm;
