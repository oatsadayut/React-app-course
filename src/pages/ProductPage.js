import React from "react";
import { AiFillGithub } from "react-icons/ai";
import GetProduct from "../components/product/GetProduct";


const ProductPage = () => {

  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <span>
            <AiFillGithub size="2rem" /> {"  "}{" "}
            <a href="https://github.com/oatsadayut/React-app-course">
              https://github.com/oatsadayut/React-app-course
            </a>{" "}
          </span>
          <h1 className="display-3">Product Page</h1>
        </div>
      </div>
      <div className="container">
        <GetProduct/>
      </div>
    </>
  );
};
export default ProductPage;
