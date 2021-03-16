import React from "react";
import { AiFillGithub } from "react-icons/ai"; //import icon

const AboutPage = () => {
  return (
    <main role="main">
      <div className="jumbotron">
        <div className="container">
          <span>
            <AiFillGithub size="2rem" /> {"  "}{" "}
            <a href="https://github.com/oatsadayut/React-app-course">
              https://github.com/oatsadayut/React-app-course
            </a>{" "}
          </span>
          <h1 className="display-3">About Page</h1>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
