import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import CountryDetails from "./components/pages/CountryDetails";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={CountryDetails} />
      </Switch>
    </>
  );
};

export default App;
