import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { addBook } from '../redux/books/Books';

const initialState = {
  id: null,
  title: '',
  author: '',
};

const NewBookForm = () => {
  const [newBook, setNewBook] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
      id: uuid(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    console.log(newBook);
    e.target.reset();
  };

  return (
    <div>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} placeholder="Book title" />
        <input type="text" name="author" onChange={handleChange} placeholder="Book author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBookForm;
