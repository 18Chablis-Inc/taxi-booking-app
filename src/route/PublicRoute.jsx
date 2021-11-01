import React from "react";
import { Route } from "react-router-dom";
import Base from "../Base";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Base>
        <Component {...props} />
      </Base>
    )}
  />
);

export default PublicRoute;
