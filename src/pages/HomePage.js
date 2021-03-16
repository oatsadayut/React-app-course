import React from "react";
import { AiFillGithub } from "react-icons/ai"; //import icon

const HomePage = () => {
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
          <h1 className="display-3">React App : My-App2</h1>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
