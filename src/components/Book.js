import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { asyncDeleteBook } from '../redux/books/BooksAsync';
import { deleteBook } from '../redux/books/Books';

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
    <li id={id} className="bookStyle">
      <p>{title}</p>
      <p>{author}</p>
      <p>{category}</p>
      <button type="button" onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default Book;
