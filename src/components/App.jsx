import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import AlbumReview from "./AlbumReview";
import TopNav from "./TopNav/TopNav";

function App(){
  return (
    <div>
    <TopNav/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/album/:title' component={AlbumReview}/>
    </Switch>
    </div>
  );
}

export default App;
