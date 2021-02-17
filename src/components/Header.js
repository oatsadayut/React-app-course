import React from "react";
import Logo from "./Logo";

const Header = () => {
    let name = "อัษฎายุธ"
    let lname = "สงวนเชื้อ"
    const fullname =()=>{
        return `${name} ${lname}`
    }
    let age = 15
  return (
    <div>
      <Logo />
      <hr />
      <h1>Header</h1>
      <p>{fullname()}</p>
      <p>อายุ {age + 10}</p>
    </div>
  );
};

export default Header;
