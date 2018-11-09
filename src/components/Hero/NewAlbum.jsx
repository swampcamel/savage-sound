import React from 'react';
import PropTypes from 'prop-types';

function NewAlbum(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.artist}</p>
    </div>
  )
}

export default NewAlbum;
