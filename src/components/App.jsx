import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import AlbumReview from "./AlbumReview";
import Page2 from "./Page2";
import TopNav from "./TopNav/TopNav";

function App(){
  return (
    <div>
    <TopNav/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/album/:title' component={AlbumReview}/>
    <Route path='/page2' component={Page2}/>
    </Switch>
    </div>
  );
}

export default App;
