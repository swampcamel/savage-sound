import React from 'react';
import PropTypes from 'prop-types';

function FeaturedAlbum(props) {
  return (
    <div className="feature-wrap">
      <style jsx>
        {`
          .feature-wrap {
            background: url(${props.imageUrl});
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
            width: 400px;
            height: 100%;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
        `}
      </style>
      <h2>{props.title}</h2>
      <span>{props.artist}</span>
    </div>
  )
}

export default FeaturedAlbum;
