import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/Books';

const Book = (props) => {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  const { title, author, id } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li id={id} className="bookStyle">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default Book;
