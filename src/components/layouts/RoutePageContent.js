import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthRoute from "../../Guard/Auth";
import AboutPage from "../../pages/AboutPage";
import CreatePage from "../../pages/catagory/CreatePage";
import EditPage from "../../pages/catagory/EditPage";
import IndexPage from "../../pages/catagory/IndexPage";
import DetailPage from "../../pages/DetailPage";
import HomePage from "../../pages/HomePage";
import HospitalDataTablePage from "../../pages/hospital/HospitalDataTablePage";
import HospitalPage from "../../pages/hospital/HospitalPage";
import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";
import RegisterPage from "../../pages/RegisterPage";
import GuestRoute from "../../Guard/Guest";
import UploadPage from "../../pages/UploadPage";
import MemberPage from "../../pages/MemberPage";
import CartPage from "../../pages/cart/CartPage";

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
        <Route path="/detail/:id/:title/:detail_c/:view">
          <DetailPage />
        </Route>
        <Route path="/hospital">
          <HospitalPage />
        </Route>
        <Route path="/datateble">
          <HospitalDataTablePage />
        </Route>
        <Route
          path="/catagory"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} exact>
                <IndexPage />
              </Route>
              <Route path={`${url}/create`}>
                <CreatePage />
              </Route>
              <Route path={`${url}/edit/:id`}>
                <EditPage />
              </Route>
            </>
          )}
        ></Route>

        <AuthRoute path="/upload">
          <UploadPage />
        </AuthRoute>

        <Route path="/register">
          <RegisterPage/>
        </Route>

        <GuestRoute path="/login">
          <LoginPage />
        </GuestRoute>

        <AuthRoute path="/member">
          <MemberPage/>
        </AuthRoute>

        <Route path="/cart">
          <CartPage />
        </Route>

      </Switch>
    </main>
  );
};

export default RoutePageContent;
