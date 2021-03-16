import React from "react";
import {Switch, Route} from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import HomePage from "../../pages/HomePage";

const RoutePageContent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
    </Switch>
  );
};

export default RoutePageContent;
