import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Clients from "./Pages/Clients";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/client" component={() => <Clients />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
