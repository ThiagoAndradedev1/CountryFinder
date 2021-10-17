import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import CountryDetails from "./components/pages/CountryDetails";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Footer from "./components/layout/Footer";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/about" component={About} />
            <Route exact path="/details/:id" component={CountryDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
