import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';

function TopNav() {
  return (
    <div className="nav">
      <style jsx>
        {`
          .nav {
            height: 52px;
            width: 100%;
            border-bottom: 1px solid #e1e1e1;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          `}
        </style>
        <div>
          <Link to="/">
            <h2>savage sound</h2>
          </Link>
        </div>
        <SearchBar/>
        <NavLinks/>
      </div>
    )
  }

  export default TopNav;
