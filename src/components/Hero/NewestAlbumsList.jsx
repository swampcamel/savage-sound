import React from 'react';
import PropTypes from 'prop-types';
import NewAlbum from './NewAlbum';

function NewestAlbumsList(props) {
  return (
    <div>
      {props.albumList.map((album, index) =>
        <NewAlbum key={index} title={album.title} artist={album.artist} date={album.releaseDate} imageUrl={album.imageUrl} genre={album.genre}/>
      )}
    </div>
  )
}

export default NewestAlbumsList;
