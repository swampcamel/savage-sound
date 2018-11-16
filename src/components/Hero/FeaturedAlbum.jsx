import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function FeaturedAlbum(props) {
  return (
    <div className="feature-wrap">
      <style jsx>
        {`
          .feature-wrap {
            margin-top: 42px;
            margin-bottom: 42px;
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
            border-radius: 36px;
            transition: all 0.4s ease;
          }
          .feature-wrap:hover {
            border: 2px solid #A68524;
          }
          .feature-wrap:hover > .meta {
            margin-left: 32px;
          }

          .meta {
            margin-bottom: 32px;
            margin-left: 16px;
            transition: all .8s ease;
          }
          `}
        </style>
        <Link to={`/albums/${props.artist}-${props.title}`}>
        <div onClick={() => {props.onChangeSelectedAlbum(props.id)}} className="meta">
          <h2>{props.title}</h2>
          <span>{props.artist}</span>
        </div>
        </Link>
      </div>
    )
  }

  export default FeaturedAlbum;
