import React from "react";
import PropTypes from "prop-types";

import AlbumSidebar from './AlbumSidebar';

function AlbumReview(props) {
  const albumList = props.albumList;
  if (!props.selectedAlbum) {
    for(let i=0; i < albumList.length; i++) {
      if (props.match.params.id === (albumList[i].artist + "-" + albumList[i].title)) {
        props.onChangeSelectedAlbum(albumList[i].id);
        break;
      }
    }
  }
  const albumId = props.selectedAlbum;


  function matchSelectedAlbum(albumId, albumArray) {
    for (let i = 0; i < albumList.length; i++) {
      if (albumArray[i].id === albumId ) {
        return albumArray[i];
      }
    }
  }

  const album = matchSelectedAlbum(albumId, albumList);
  console.log(album);
  return (
    <div className="ar-wrapper">
      <style jsx>
        {`
          .ar-wrapper {
            display: flex;
            justify-content: center;
          }

          .album-page-wrapper {
            width: 68%;
            border: blue solid 1px;
          }

          .album-review-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 32px;
            height: 180px;
          }
          .ratings {
            display: flex;
            flex-direction: column;
          }
          .ratings div {
            line-height: 32px;
          }
          `}
        </style>
        <AlbumSidebar album={album}/>
        <div className="album-page-wrapper">
          <div className="album-review-header">
            <div className="album-meta">
            <h4>{album.artist}</h4>
            <h2>{album.title}</h2>
            <h6>{album.genre} / {album.releaseDate}</h6>
            </div>
            <div className="ratings">
              <div>
                <span>Author Score: </span><span>{album.rating} / 10</span>
              </div>
              <div>
                <span>User Score: </span><span>{album.starRating} / 5</span>
              </div>
              <div className="user-rating">
                <p>Rate This Album!</p>
                <span onClick={() => {props.onModifyUserRating(album.id, 1)}} className="rating-option">1</span>
                <span onClick={() => {props.onModifyUserRating(album.id, 2)}} className="rating-option">2</span>
                <span onClick={() => {props.onModifyUserRating(album.id, 3)}} className="rating-option">3</span>
                <span onClick={() => {props.onModifyUserRating(album.id, 4)}} className="rating-option">4</span>
                <span onClick={() => {props.onModifyUserRating(album.id, 5)}} className="rating-option">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  export default AlbumReview;
