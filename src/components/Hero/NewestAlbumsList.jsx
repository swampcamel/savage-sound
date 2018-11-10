import React from 'react';
import PropTypes from 'prop-types';
import NewAlbum from './NewAlbum';

function NewestAlbumsList(props) {
  return (
    <div className="list-wrapper">
      <style jsx>
        {`
          .list-wrapper {
            overflow-y: scroll;
            overflow-x: visible;
            height: 100%;
            width: 700px;
            padding: 4px;
          }
          .list-wrapper::-webkit-scrollbar {
            display: none;
          }
        `}

        </style>
        {props.albumList.map((album, index) =>
          <NewAlbum key={index} title={album.title} artist={album.artist} date={album.releaseDate} imageUrl={album.imageUrl} genre={album.genre}/>
        )}
      </div>
    )
  }

  export default NewestAlbumsList;
