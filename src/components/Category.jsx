import React from 'react';
import PropTypes from 'prop-types';
import altPointer from '../assets/img/alt-pointer.png';
import {Link} from 'react-router-dom';

function Category(props) {
  return (
    <div className="category-wrapper">
      <style jsx>
        {`
          .category-wrapper {
            width: 90%;
            margin: 0 auto;
          }
          .category-title {
            text-align: center;
            padding: 82px;
          }
          .album-img-wrapper {
            height: 142px;
            width: 200px;
            transition: transform .3s linear;
            display: flex;
            justify-content: center;
          }
          .album-img-wrapper img {
            display: block;
          }
          .album-img-wrapper:hover {
            transform: scale(2);
          }
          .album-feature-wrapper {
            display: flex;
            justify-content: center;
            text-align: center;
          }
          .album-feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 22px;
            cursor: url(${altPointer}), auto;
          }
        `}
      </style>
      <div className="category-title">
        {props.name}
      </div>
      <div className="album-feature-wrapper">
        {props.albumList.map((album, index) => {
          if (album.genre == props.name) {
            return(
              <Link key={index} to="/albums/:title">
              <div className="album-feature" >
              <div className="album-img-wrapper">
                <img height="100%" src={album.imageUrl}/>
              </div>
              <p>{album.title}</p>
              <p>{album.artist}</p>
              <p>{album.releaseDate}</p>
              </div>
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Category;
