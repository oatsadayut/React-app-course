import React from 'react'
import { AiFillGithub } from "react-icons/ai"; //import icon

const MemberPage = () => {
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
            <h1 className="display-3">Member Page</h1>
          </div>
        </div>
        <div className="container">
            <h1>สมาชิก : </h1>
        </div>
      </>
    )
}

export default MemberPage
