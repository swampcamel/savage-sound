import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./Home";
import TopNav from "./TopNav/TopNav";

function App(){
  const mainStyles = {
    marginTop: "82px"
  }
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
    <div>
    <TopNav/>
    <Switch>
    <Route exact path='/' component={Home}/>
    </Switch>
    </div>
  );
}

export default App;
