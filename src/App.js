import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import SearchCountry from "./components/countries/SearchCountry";
import CountryDetails from "./components/pages/CountryDetails";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={CountryDetails} />
        {/* <Route exact path="/search" component={SearchCountry} /> */}
      </Switch>
    </>
  );
};

export default App;
