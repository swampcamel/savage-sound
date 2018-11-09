import React from 'react';

function SearchBar() {
  return(
    <div>
      <style jsx>
        {`
          .search-wrap {
            padding: 4px 32px 4px 16px;
            border: 2px solid #e1e1e1;
            border-radius: 12px;
          }

          input {
            outline: none;
            border: none;
            border-bottom: solid 2px #e1e1e1;
            font-size: 18px;
          }
        `}
      </style>
      <div className="search-wrap">
        <input type="text" placeholder="Search..."></input>
      </div>
    </div>
  )
}

export default SearchBar;
