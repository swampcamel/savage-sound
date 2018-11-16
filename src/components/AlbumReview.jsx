import React from "react";
import PropTypes from "prop-types";

function AlbumReview(props) {
  const albumId = props.selectedAlbum;
  const albumList = props.albumList;

  function matchSelectedAlbum(albumId, albumArray) {
    for (let i = 0; i < albumList.length; i++) {
      if (albumArray[i].id === albumId ) {
        return albumArray[i];
      }
    }
  }

  const album = matchSelectedAlbum(albumId, albumList);
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
            <img height="200px" src={album.imageUrl}/>
          </div>
        </div>
        <div className="album-page-wrapper">
          <h4>{album.artist}</h4>
          <h2>{album.title}</h2>
          <h6>{album.genre} /{album.releaseDate}</h6>
        </div>
      </div>
    )
  };

  export default AlbumReview;
