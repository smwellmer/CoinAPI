import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Currencies from "./Pages/Currencies";
import Main from "./Pages/Main";
import Price from "./Pages/Price";
import Nav from "./Components/Nav"



function App() {

  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/Currencies">
        <Currencies />
      </Route>
      <Route 
        path="/Price/:symbol"
        render={(routerProps)=> {
          return <Price {...routerProps}/>
        }}
        />
      </Switch>
    </div>
  );
}
export default App;