
import React from "react";
import Hero from "./Hero/Hero";
import Category from "./Category";

function Home(props) {

  return (
    <div>
      <Hero albumList={props.albumList}/>
      <Category name="Psych Rock" albumList={props.albumList}/>
      <Category name="Math Rock" albumList={props.albumList}/>
      <Category name="Niche" albumList={props.albumList}/>
    </div>
  )
};

export default Home;
