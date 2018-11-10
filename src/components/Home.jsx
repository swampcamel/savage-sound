
import React from "react";
import Hero from "./Hero/Hero";
import Category from "./Category";

function Home() {

  const state2 = {
    albumList: [
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
      },
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
        title: "Amazing Things",
        artist: "Things Amazing",
        releaseDate: "Jul 13, 2018",
        recordLabel: "Dine Alone Records",
        formats: ["CD", "LP"],
        totalSongs: "5",
        length: "13 min",
        rating: "8",
        genre: "Math Rock",
        starRating: "4.5",
        imageUrl: "https://f4.bcbits.com/img/a2502688364_10.jpg",
        trackList: [
          {
            songTitle: "Trash Boat",
            trackNumber: "1",
            length: "1:34",
            rating: "6"
          },
        ]
      },
      {
        title: "Our Latest Number",
        artist: "toe",
        releaseDate: "Aug 22, 2018",
        recordLabel: "Topshelf Records",
        formats: ["CD", "LP"],
        totalSongs: "4",
        length: "18 min",
        rating: "8",
        genre: "Math Rock",
        starRating: "4.5",
        imageUrl: "https://f4.bcbits.com/img/a1829945324_10.jpg",
        trackList: [
          {
            songTitle: "Dual Harmonics",
            trackNumber: "1",
            length: "3:13",
            rating: "6"
          },
        ]
      },
      {
        title: "Magick Songs",
        artist: "JEFF The Brotherhood",
        releaseDate: "Aug 24, 2018",
        recordLabel: "Dine Alone Records",
        formats: ["CD", "LP"],
        totalSongs: "12",
        length: "54 min",
        rating: "8",
        genre: "Psych Rock",
        starRating: "4.5",
        imageUrl: "https://f4.bcbits.com/img/a4170847855_10.jpg",
        trackList: [
          {
            songTitle: "Low Rider",
            trackNumber: "1",
            length: "3:30",
            rating: "6"
          },
          {
            songTitle: "I'm a Man",
            trackNumber: "2",
            length: "3:08",
            rating: "8"
          }
        ]
      },
      {
        title: "Mercury Fountain (Bonus Version)",
        artist: "The Physics House Band",
        releaseDate: "Sep 19, 2018",
        recordLabel: "Small Pond",
        formats: ["CD", "LP"],
        totalSongs: "3",
        length: "21 min",
        rating: "9",
        genre: "Math Rock",
        starRating: "5",
        imageUrl: "https://f4.bcbits.com/img/a3059624199_10.jpg",
        trackList: [
          {
            songTitle: "Surrogate Head - Live",
            trackNumber: "1",
            length: "12:47",
            rating: "10"
          },
          {
            songTitle: "Obidant/Imploex - Live",
            trackNumber: "2",
            length: "3:08",
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
        genre: "Niche",
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
        title: "You Won't Get What You Want",
        artist: "Daughters",
        releaseDate: "Oct 26, 2018",
        recordLabel: "Ipecac Records",
        formats: ["CD", "LP"],
        totalSongs: "10",
        length: "48 min",
        rating: "7",
        genre: "Niche",
        starRating: "4.0",
        imageUrl: "https://f4.bcbits.com/img/a0781820650_10.jpg",
        trackList: [
          {
            songTitle: "City Song",
            trackNumber: "1",
            length: "5:56",
            rating: "6"
          },
          {
            songTitle: "Long Road, No Turns",
            trackNumber: "2",
            length: "5:04",
            rating: "8"
          }
        ]
      },
      {
        title: "Fudge Sandwich",
        artist: "Ty Segall",
        releaseDate: "Oct 26, 2018",
        recordLabel: "In the Red Records",
        formats: ["CD", "LP"],
        totalSongs: "11",
        length: "38 min",
        rating: "8",
        genre: "Psych Rock",
        starRating: "4.5",
        imageUrl: "https://cdn.shopify.com/s/files/1/0336/8929/products/Ty_Segall_Fudge_Sandwich_-_Cover_for_web_1024x1024.jpg?v=1536102160",
        trackList: [
          {
            songTitle: "Low Rider",
            trackNumber: "1",
            length: "3:30",
            rating: "6"
          },
          {
            songTitle: "I'm a Man",
            trackNumber: "2",
            length: "3:08",
            rating: "8"
          }
        ]
      }
    ]
  }
  return (
    <div>
      <Hero albumList={state2.albumList}/>
      <Category name="Psych Rock" albumList={state2.albumList}/>
      <Category name="Math Rock" albumList={state2.albumList}/>
      <Category name="Niche" albumList={state2.albumList}/>
    </div>
  )
};

export default Home;
