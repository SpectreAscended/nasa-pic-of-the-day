import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">
          Take me home
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
