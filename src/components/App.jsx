import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./Home";
import TopNav from "./TopNav/TopNav";

function App(){
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
