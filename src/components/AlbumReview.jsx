import React from "react";
import PropTypes from "prop-types";

function AlbumReview(props) {
  const albumId = props.selectedAlbum;
  console.log(albumId);
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
          .album-cover-wrapper {
            height: 200px;
          }
          `}
        </style>
        <div className="album-sidebar">
          <div className="album-cover-wrapper">
            <img height="100%" src={props.albumList[albumId].imageUrl}/>
          </div>
        </div>
        <div className="album-page-wrapper">
          <h4>{props.albumList[albumId].artist}</h4>
          <h2>{props.albumList[albumId].title}</h2>
          <h6>{props.albumList[albumId].genre} /{props.albumList[albumId].releaseDate}</h6>
        </div>
      </div>
    )
  };

  export default AlbumReview;
