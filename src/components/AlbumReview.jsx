import React from "react";
import PropTypes from "prop-types";

function AlbumReview(props) {
  return (
    <div className="ar-wrapper">
      <style jsx>
        {`
          .ar-wrapper {
            display: flex;
            justify-content: center;
          }
          .album-sidebar {
            width: 28%;
            border: red solid 1px;
          }
          .album-page-wrapper {
            width: 68%;
            border: blue solid 1px;
          }
          `}
        </style>
        <div className="album-sidebar">
          <h2>Image</h2>
        </div>
        <div className="album-page-wrapper">
          <h4>Album Artist</h4>
          <h2>Album Title</h2>
          <h6>Genre / Release Date</h6>
        </div>
      </div>
    )
  };

  export default AlbumReview;
