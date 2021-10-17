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
import PrivateRoute from "./private/PrivateRoute";
import Auth from "./components/pages/Auth";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/login" component={Auth} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute exact path="/about" component={About} />
            <PrivateRoute
              exact
              path="/details/:id"
              component={CountryDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
