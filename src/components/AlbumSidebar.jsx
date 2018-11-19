import React from 'react';
import SpotifyLogo from '../assets/img/spotify-brands.svg';

function AlbumSidebar (props) {
  return(
    <div className="album-sidebar">
      <style jsx>
        {`
          .album-sidebar {
            width: 28%;
            border: red solid 1px;
          }
          .album-cover-wrapper {
            height: 200px;
            border: solid 2px grey;
          }
          .album-content-wrapper {
            display: flex;
            flex-direction: column;
              align-items: center;
            }
        `}
      </style>
      <div className="album-content-wrapper">
        <div className="album-cover-wrapper">
          <img height="200px" src={props.album.imageUrl}/>
        </div>
        <div>
          <span>{props.album.recordLabel} / {props.album.releaseDate}</span>
        </div>
        <div>
          <h4>{props.album.title}</h4>
          <h5>{props.album.artist}</h5>
        </div>
        <div>
          <iframe style={{border: "0", width: "100%", height: "42px"}} src={props.album.playerIframe} seamless></iframe>
        </div>
        <div>
          <h5>Listen on:</h5>
          <SpotifyLogo/>
        </div>
        <div>

        </div>

      </div>
    </div>
  )
}

export default AlbumSidebar;
