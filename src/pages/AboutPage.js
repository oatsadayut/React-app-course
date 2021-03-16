import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai"; //import icon

const AboutPage = () => {
  // useState เพื่อเก็บข้อมูลลงตัวแปร version
  const [version, setVersion] = useState(null);

  // get ข้อมูลจาก Api version โดยใช้ Axios
  const getVersion = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/versio");
    setVersion(res.data.data.version);
  };

  // useEffect เพื่อให้ทำงานเมื่อเรียกหน้า about
  useEffect(() => {
    getVersion();
  }, []);

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
      <div className="container">

        {/* if แบบใน JSX */}
        {version && <p>Version : {version}</p>}

        {/* แบบปกติ
          if (version) {
            <p>Version : {version}</p>
          }
         */}


      </div>
    </main>
  );
};

export default AboutPage;
