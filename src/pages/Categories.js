import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkStatus } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories-container">
      <button type="button" onClick={handleClick}>Check status</button>
      <div>
        {categories}
      </div>
    </div>
  );
};

export default Categories;
