import React from 'react';
import { NavLink } from 'react-router-dom';
import createApp, { addBooks, deleteBooks, getBooks } from '../api/bookstoreApi';

const Navbar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
      <button type="button" onClick={createApp}>create app</button>
      <button type="button" onClick={addBooks}>add books</button>
      <button type="button" onClick={getBooks}>get books</button>
      <button type="button" onClick={deleteBooks}>delete books</button>
    </nav>
  </header>
);

export default Navbar;
