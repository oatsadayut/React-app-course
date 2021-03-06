import React from "react";
import Logo from "./Logo";
import {Button} from "./style/Button" //ดึง css จาก style component มาใช้

const Header = () => {
  let name = "อัษฎายุธ";
  let lname = "สงวนเชื้อ";
  const fullname = () => {
    return `${name} ${lname}`;
  };
  let age = 15;
  let islogin = true;

  const product = [
    { id: 1, name: "Gogo", tepy: "1" },
    { id: 2, name: "GoTo", tepy: "1" },
  ];

  const miss = () =>{
    alert('miss You KUY')
  }

  return (
    <div>
      <Button primary onClick={miss}>Click Miss</Button>
      
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
        <hr />
        <ul>
          {product.map((product, index) => {
            return (
              <li key={product.id}>
                {index + 1} {product.name} {product.type}
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
};

export default Header;
