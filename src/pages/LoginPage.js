import React from "react";

import { AiFillGithub } from "react-icons/ai"; //import icon
import { Form, Button } from "react-bootstrap";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

//React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Redux Call Action ---------------------------------------------
import { useDispatch,useSelector } from "react-redux";
import { updateProfile } from "../redux/action/profileAction";
import { authToken } from "../redux/action/authAction";

// --------------------------------------------------------------

// React hook form Schema Validation
const schema = yup.object().shape({
  email: yup.string().required("กรุณากรอก Email").email("ไม่ใช่รูปแบบ Email !"), //ตั้งไว้ว่า input นี้ต้องกรอกและ เป็น String เท่านั้น ตรง .required("<หากไม่กรอกให้แสดงอะไร>") และเป็นรูปแบบ Email
  password: yup
    .string()
    .required("กรุณากรอก Password")
    .min(6, "กรุณากรอก Password มากกว่า 6 ตัวอักษร"), //ตั้งไว้ว่า input นี้ต้องกรอกและ เป็น String เท่านั้น ตรง .required("<หากไม่กรอกให้แสดงอะไร>") และรูปแบบ Password ต้องมากว่า 6 ตัว
});
// -------------------------------- //

const LoginPage = () => {
  const { addToast } = useToasts();
  const history = useHistory(); //history Route
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  //Redux Call Action : ประกาศใช้งาน Dispatch โดยให้ชื่อว่า action
  const action = useDispatch();
  const onSubmit = async (data) => {
    try {
      const url = "https://api.codingthailand.com/api/login";
      const res = await axios.post(url, {
        email: data.email,
        password: data.password,
      });

      // localStorage.setItem("token", JSON.stringify(res.data)); //set Token To localStorage
      action(authToken(res.data))
      await getProfile(res.data.access_token); //Send Token To getProfile function

    } catch (error) {
      // addToast(error.response.data.message, { appearance: "error" });
      console.log(error)
    }
  };

  // GetProfile function
  const getProfile = async (token_access) => {
    try {
      const url = "https://api.codingthailand.com/api/profile";
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token_access}`, // Send Token Header Authorization : Bearer <TOKEN>
        },
      });

      localStorage.setItem("pid", JSON.stringify(res.data.data.user)); // Add User Data To LocalStorage pid Key
      const profileValue = JSON.parse(localStorage.getItem('pid')); // Create ตัวแปร profileValue เพื่อมาเก็บข้อมูล profile ที่อยู่ใน localStorage
      action(updateProfile(profileValue)); //ส่งตัวแปรที่เก็บข้อมูล profile เข้าไปใน action เพื่อ ส่งให้ Redux Reducer อัพเดทข้อมูลต่อไป 

      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

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
          <h1 className="display-3">Register Page</h1>
        </div>
      </div>

      <div className="container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="กรุณากรอก Email"
              ref={register}
              className={`${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <Form.Control.Feedback type="invalid">
                {errors.email.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="กรุณากรอก Password"
              ref={register}
              className={`${errors.password ? "is-invalid" : ""}`}
              autoComplete="off"
            />
            {errors.password && (
              <Form.Control.Feedback type="invalid">
                {errors.password.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
