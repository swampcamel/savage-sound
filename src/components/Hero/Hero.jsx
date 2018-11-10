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
        genre: "Psych Rock",
        starRating: "4",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41MizCr3m2L._SY355_.jpg",
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
        genre: "Psych Rock",
        starRating: "4.5",
        imageUrl: "http://theobelisk.net/obelisk/wp-content/uploads/2018/08/uncle-acid-and-the-deadbeats-wasteland.jpg",
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
      },
      {
        title: "You Ain't Coming Back",
        artist: "Zeal & Ardor",
        releaseDate: "Sep 07, 2018",
        recordLabel: "MVKA Music",
        formats: ["CD", "LP"],
        totalSongs: "16",
        length: "47 min",
        rating: "7",
        genre: "Black Metal",
        starRating: "4.0",
        imageUrl: "https://f4.bcbits.com/img/a4038930226_16.jpg",
        trackList: [
          {
            songTitle: "Intro",
            trackNumber: "1",
            length: "2:14",
            rating: "6"
          },
          {
            songTitle: "Gravedigger's Chant",
            trackNumber: "2",
            length: "3:11",
            rating: "8"
          }
        ]
      },
      {
        title: "Memory Lame",
        artist: "Giraffes? Giraffes!",
        releaseDate: "Apr 27, 2018",
        recordLabel: "Topshelf Records",
        formats: ["CD", "LP"],
        totalSongs: "6",
        length: "41 min",
        rating: "8",
        genre: "Math Rock",
        starRating: "4.5",
        imageUrl: "https://f4.bcbits.com/img/a0605327415_16.jpg",
        trackList: [
          {
            songTitle: "Heretical Doses",
            trackNumber: "1",
            length: "8:36",
            rating: "6"
          },
          {
            songTitle: "Hug of Death",
            trackNumber: "2",
            length: "6:48",
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
            height: 50vh;
            padding: 42px;
          }
          `}
        </style>
        <div className="hero-feature">
          <FeaturedAlbum title={state.albumList[1].title} imageUrl={state.albumList[1].imageUrl}  artist={state.albumList[1].artist}/>
          <NewestAlbumsList albumList={state.albumList}/>
        </div>
      </div>
    )
  }

  export default Hero;
