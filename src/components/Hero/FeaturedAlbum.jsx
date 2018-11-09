import React from 'react';
import PropTypes from 'prop-types';

function FeaturedAlbum(props) {
  return (
    <div className="feature-wrap">
      <style jsx>
        {`
          .feature-wrap {
            background: url(${props.imageUrl});
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            width: 600px;
            height: 100%;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            text-shadow: 2px 2px 2px #000;

          }
          .meta {
            margin-bottom: 32px;
            margin-left: 16px;
          }
        `}
      </style>
      <div className="meta">
      <h2>{props.title}</h2>
      <span>{props.artist}</span>
      </div>
    </div>
  )
}

export default FeaturedAlbum;
