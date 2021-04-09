import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ children, ...rest }) => {
  let isGuest = false;
  const token = JSON.parse(localStorage.getItem('token'))

  if (!token) isGuest = true;
  

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isGuest ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );

};

export default GuestRoute;
