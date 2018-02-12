import React from "react";
import { Switch, Route } from "react-router-dom";
import CatGrid from "./CatGrid";
import CatLanding from "./CatLanding";


// The Main component renders one of the two provided
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CatGrid} />
      <Route path="/CatLanding" component={CatLanding} />
    </Switch>
  </main>
);


export default Main;
