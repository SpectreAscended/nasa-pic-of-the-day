import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Take me home</Link>
      </ul>
    </div>
  );
};

export default NavBar;
