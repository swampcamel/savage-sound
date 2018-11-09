import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./Home";

function App(){
  const mainStyles = {
    marginTop: "82px"
  }
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
