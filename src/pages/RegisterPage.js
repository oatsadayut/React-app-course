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

// React hook form Schema Validation
const schema = yup.object().shape({
  name: yup.string().required("กรุณากรอก ชื่อ"), //ตั้งไว้ว่า input นี้ต้องกรอกและ เป็น String เท่านั้น ตรง .required("<หากไม่กรอกให้แสดงอะไร>")
  email: yup.string().required("กรุณากรอก Email").email('ไม่ใช่รูปแบบ Email !'), //ตั้งไว้ว่า input นี้ต้องกรอกและ เป็น String เท่านั้น ตรง .required("<หากไม่กรอกให้แสดงอะไร>") และเป็นรูปแบบ Email
  password: yup.string().required("กรุณากรอก Password").min(6,'กรุณากรอก Password มากกว่า 6 ตัวอักษร'), //ตั้งไว้ว่า input นี้ต้องกรอกและ เป็น String เท่านั้น ตรง .required("<หากไม่กรอกให้แสดงอะไร>") และรูปแบบ Password ต้องมากว่า 6 ตัว

});
// -------------------------------- //

const RegisterPage = () => {
  const { addToast } = useToasts();
  const history = useHistory(); //history Route

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      let url = "https://api.codingthailand.com/api/register";
      const res = await axios.post(url, {
        name: data.name,
        email: data.email,
        password: data.password
      });
      addToast(res.data.message, { appearance: "success" });
      history.replace("/login");
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
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
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="กรุณากรอก ชื่อ"
              ref={register}
              className={`${
                errors.name ? "is-invalid" : ""
              }`}
            />
            {errors.name && (
              <Form.Control.Feedback type="invalid">
                {errors.name.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="กรุณากรอก Email"
              ref={register}
              className={`${
                errors.email ? "is-invalid" : ""
              }`}
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
              className={`${
                errors.password ? "is-invalid" : ""
              }`}
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

export default RegisterPage;
