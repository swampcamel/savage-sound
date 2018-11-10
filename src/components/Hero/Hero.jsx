import React from 'react';
import FeaturedAlbum from './FeaturedAlbum';
import NewestAlbumsList from './NewestAlbumsList';
import PropTypes from 'prop-types';

function Hero(props) {
  return (
    <div className="hero">
      <style jsx>
        {`
          .hero {
            width: 100%;
            border-bottom: solid red 1px;
            padding-top: 42px;
            padding-bottom: 42px;
          }
          .hero-feature {
            width: 1350px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #e1e1e1;
            border-radius: 50px;
            height: 40vh;
            padding: 42px;
          }
          @media screen and (max-width: 1350px) {
            .hero-feature {
              flex-direction: column;
              height: 70vh;
              width: 98%;
            }
          }
          `}
        </style>
        <div className="hero-feature">
          <FeaturedAlbum title={props.albumList[props.albumList.length-1].title} imageUrl={props.albumList[props.albumList.length-1].imageUrl}  artist={props.albumList[props.albumList.length-1].artist}/>
          <NewestAlbumsList albumList={props.albumList}/>
        </div>
      </div>
    )
  }

  export default Hero;
