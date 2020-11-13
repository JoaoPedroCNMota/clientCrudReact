import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Clients from "./Pages/Clients";
import NewClient from "./Pages/NewClient";
import Delete from "./Pages/Delete";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/client" component={() => <Clients />} />
        <Route exact path="/newclient" component={() => <NewClient />} />
        <Route exact path="/delete" component={() => <Delete />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
