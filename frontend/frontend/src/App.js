import { Route, Switch } from "react-router-dom";

import Buyers from "./components/Buyers";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import React from "react";
import Retailors from "./components/Retailors";

function App() {
  return (
    <div>
       <p class="fw-bold text-center fs-1" style={{color:"blue"}}> Welcome to all in one marketing website</p>
      <br/>       
      <NavBar />
      <Switch>
        <Route exact path="/buyers">
          <Buyers/>
        </Route>
        <Route exact path="/retailors">
          <Retailors/>
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route exact path="/">
          <Products/>
        </Route>
      </Switch>
  
    </div>
  );
}

export default App;
