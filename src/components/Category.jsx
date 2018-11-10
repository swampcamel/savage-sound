import React from 'react';
import PropTypes from 'prop-types';

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
            border: 1px solid #e1e1e1;
            height: 72px;
            width: 200px;
            transition: transform .3s linear;
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
            margin: 0 22px;
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
              <div className="album-feature" key={index}>
              <div className="album-img-wrapper">
                <img height="100%" src={album.imageUrl}/>
              </div>
              <p>{album.title}</p>
              <p>{album.artist}</p>
              <p>{album.releaseDate}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Category;
