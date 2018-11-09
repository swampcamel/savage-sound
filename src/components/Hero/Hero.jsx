import React from 'react';
import FeaturedAlbum from './FeaturedAlbum';
import NewestAlbumsList from './NewestAlbumsList';

function Hero() {

  const state = {
    albumList: [
      {
        title: "Something Else",
        artist: "The Brian Jonestown Massacre",
        releaseDate: "May 25, 2018",
        recordLabel: "A Records",
        formats: ["CD", "LP", "DD"],
        totalSongs: "9",
        length: "39 min",
        rating: "7",
        starRating: "4",
        imageUrl: "https://music-b26f.kxcdn.com/wp-content/uploads/2018/10/Uncle-Acid-The-Deadbeats-Wasteland-LP-COLOURED-73206-1-770x470.jpg",
        trackList: [
          {
            songTitle: "Hold That Thought",
            trackNumber: "1",
            length: "4:47",
            rating: "7"
          },
          {
            songTitle: "Animal Wisdom",
            trackNumber: "2",
            length: "3:35",
            rating: "8"
          }
        ]

      },
      {
        title: "Wasteland",
        artist: "Uncle Acid & The Deadbeats",
        releaseDate: "October 12, 2018",
        recordLabel: "Rise Above Records",
        formats: ["CD", "LP"],
        totalSongs: "8",
        length: "46 min",
        rating: "8",
        starRating: "4.5",
        imageUrl: "https://music-b26f.kxcdn.com/wp-content/uploads/2018/10/Uncle-Acid-The-Deadbeats-Wasteland-LP-COLOURED-73206-1-770x470.jpg",
        trackList: [
          {
            songTitle: "I See Through You",
            trackNumber: "1",
            length: "5:42",
            rating: "7"
          },
          {
            songTitle: "Shockwave City",
            trackNumber: "2",
            length: "4:00",
            rating: "8"
          }
        ]
      }
    ]
  }

  return (
    <div className="hero">
      <style jsx>
        {`
          .hero {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 34vh;
            border-bottom: solid red 1px;
          }
        `}
      </style>
      <FeaturedAlbum title={state.albumList[1].title} imageUrl={state.albumList[1].imageUrl}  artist={state.albumList[1].artist}/>
      <NewestAlbumsList/>
      </div>
    )
  }

  export default Hero;
