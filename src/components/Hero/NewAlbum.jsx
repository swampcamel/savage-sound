import React from 'react';
import PropTypes from 'prop-types';

function NewAlbum(props) {
  return (
    <div className="new-album">
      <style jsx>
        {`
          .new-album {
            display: flex;
            border: 1px solid #F2E63D;
            border-radius: 30px;
            width: 600px;
            padding: 22px 32px;
            align-items: center;
            justify-content: space-between;
            transition: all .15s linear;
          }

          .album-info {
            transition: all .15s linear;
          }
          .new-album:hover {
            border: 2px solid #A68524;
            transform: scale(1.02);
          }

          .new-album:hover > .album-info {
            color: #072273;
            text-decoration: underline;
            font-size: 17px;
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
          .album-img-wrapper {
            border: 1px solid #e1e1e1;
            height: 72px;
            transition: transform .3s linear;
          }
          .album-img-wrapper:hover {
            transform: scale(2);
          }
        `}
      </style>
      <div className="album-info">
      <span className="album-title"><strong>{props.title}</strong></span>
      <span className="album-artist">{props.artist}</span>
      </div>
      <div className="new-album-right">
        <span><em>{props.genre}</em></span>
        <div className="album-img-wrapper">
          <img height="100%" src={props.imageUrl}/>
        </div>
      </div>
    </div>
  )
}

export default NewAlbum;