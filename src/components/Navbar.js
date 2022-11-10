import React from 'react';
import { NavLink } from 'react-router-dom';
import createApp from '../api/bookstoreApi';

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
      <button type="button" style={{ display: 'none' }} onClick={createApp}>create app</button>

    </nav>
  </header>
);

export default Navbar;
