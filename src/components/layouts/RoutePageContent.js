import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";

const RoutePageContent = () => {
  return (
    <main role="main">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
      </Switch>
    </main>
  );
};

export default RoutePageContent;
