import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRoute = ({ children, ...rest }) => {
  let isGuest = false;
  const token = useSelector((state) => state.authReducer.token);
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
