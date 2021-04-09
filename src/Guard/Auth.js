import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ children, ...rest }) => {
  let isLogin = false;
  const token = JSON.parse(localStorage.getItem('token'))

  if (token) isLogin = true;
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
