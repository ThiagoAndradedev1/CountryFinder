import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const status = useIsLoggedIn();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        status ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default PrivateRoute;
