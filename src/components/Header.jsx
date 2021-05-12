import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="navbar">
    <Link to="/">Create User</Link>
    <Link to="/cards">Cards</Link>
  </div>
);

export default Header;
