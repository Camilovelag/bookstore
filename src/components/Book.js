import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { asyncDeleteBook } from '../redux/books/BooksAsync';
import { deleteBook } from '../redux/books/Books';
import './Book.css';

const Book = (props) => {
  Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(asyncDeleteBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li id={id} className="book-container">
      <p className="book-category">{category}</p>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <div className="book-actions">
        <button type="button">Comment</button>
        <button type="button" onClick={handleRemove}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

export default Book;
