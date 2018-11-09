import React from 'react';
import PropTypes from 'prop-types';

function NewAlbum(props) {
  return (
    <div className="new-album">
      <style jsx>
        {`
          .new-album {
            display: flex;
            border: 1px solid #e1e1e1;
            border-radius: 30px;
            width: 600px;
            padding: 22px 32px;
            align-items: center;
            justify-content: space-between;
          }
          span, img {
            display: block;
          }
          .new-album-right {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 30%;
          }
        `}
      </style>
      <div className="album-info">
      <span>{props.title}</span>
      <span>{props.artist}</span>
      </div>
      <div className="new-album-right">
        <span><em>{props.genre}</em></span>
      <div className="album-img-wrapper">
        <img height="72px" src={props.imageUrl}/>
      </div>
      </div>
    </div>
  )
}

export default NewAlbum;
