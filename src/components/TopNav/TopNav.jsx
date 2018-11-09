import React from 'react';

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
      <h2>savage sound</h2>
      </div>
      <SearchBar/>
      <NavLinks/>
    </div>
  )
}

export default TopNav;
