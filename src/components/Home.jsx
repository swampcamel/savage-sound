
import React from "react";
import Hero from "./Hero/Hero";
import Category from "./Category";

function Home(props) {

  return (
    <div>
      <Hero onChangeSelectedAlbum={props.onChangeSelectedAlbum} albumList={props.albumList}/>
      <Category onChangeSelectedAlbum={props.onChangeSelectedAlbum} name="Psych Rock" albumList={props.albumList}/>
      <Category onChangeSelectedAlbum={props.onChangeSelectedAlbum} name="Math Rock" albumList={props.albumList}/>
      <Category onChangeSelectedAlbum={props.onChangeSelectedAlbum} name="Niche" albumList={props.albumList}/>
    </div>
  )
};

export default Home;
