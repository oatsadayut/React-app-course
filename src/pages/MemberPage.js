import React from "react";
import { AiFillGithub } from "react-icons/ai"; //import icon
import { useSelector } from "react-redux"; //Redux Selector

const MemberPage = () => {
  //Redux Get Profile
  const profileValue = useSelector((state) => state.profileReducer.profile); // ดึงข้อมูลที่อยู่ใน Redux Reducer Profile มาเก็บในตัวแปร profileRedux

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
        <h5>
          {profileValue ? (
            <>
              สมาชิก : {profileValue.name} Email : {profileValue.email}
            </>
          ) : (
            <>
              ผิดพลาด
            </>
          )
            
          }
        </h5>
      </div>
    </>
  );
};

export default MemberPage;
