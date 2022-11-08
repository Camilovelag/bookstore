import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

  const { title, author } = props;

  return (
    <li className="bookStyle">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </li>
  );
};

export default Book;
