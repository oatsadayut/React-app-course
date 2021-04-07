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
  catagoryName: yup.string().required("กรุณากรอก Catagory"), //ตั้งไว้ว่า input นี้ต้องกรอกและ เป็น String เท่านั้น ตรง .required("<หากไม่กรอกให้แสดงอะไร>")
});
// -------------------------------- //

const CreatePage = () => {

  const { addToast } = useToasts(); //Toasts Alert
  const history = useHistory(); //history Route

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      let url = "https://api.codingthailand.com/api/category";
      const res = await axios.post(url, {
        name: data.catagoryName,
      });
      history.replace("/catagory");
      addToast(res.data.message, { appearance: "success" });
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
          <h1 className="display-3">เพิ่ม Catagory</h1>
        </div>
      </div>
      <div className="container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicCatagory">
            <Form.Label>Catagory Name</Form.Label>
            <Form.Control
              type="text"
              name="catagoryName"
              placeholder="กรุณากรอก Catagory"
              ref={register}
              className={`form-control ${
                errors.catagoryName ? "is-invalid" : ""
              }`}
            />
            {errors.catagoryName && (
              <Form.Control.Feedback type="invalid">
                {errors.catagoryName.message}
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

export default CreatePage;
