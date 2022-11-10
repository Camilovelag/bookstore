import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { BsFillPersonFill } from 'react-icons/bs';

import createApp from '../api/bookstoreApi';

const Navbar = () => (
  <header>
    <h1 className="navbar-title">Bookstore CMS</h1>
    <nav>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <button type="button" style={{ display: 'none' }} onClick={createApp}>create app</button>
    </nav>
    <div className="navbar-user">
      <BsFillPersonFill />
    </div>
  </header>
);

export default Navbar;
