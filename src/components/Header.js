import React from "react";
import Logo from "./Logo";

const Header = () => {
    let name = "อัษฎายุธ"
    let lname = "สงวนเชื้อ"
    const fullname =()=>{
        return `${name} ${lname}`
    }
    let age = 15
    let islogin = true

  return (
    <div>
      <Logo />
      <hr />
      <h1>Header</h1>
      <p>{fullname()}</p>
      <p>อายุ {age + 10}</p>

      {/* if */}
      <p>IF</p>
      {islogin && <Logo />} 
      <br />
      {/* if else */}
      <p>IF Else</p>
      {islogin === true ? <Logo /> : <p>False</p>}
    </div>
  );
};

export default Header;
