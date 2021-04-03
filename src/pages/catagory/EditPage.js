import React from "react";
import { AiFillGithub } from "react-icons/ai"; //import icon
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

//React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// React hook form Schema Validation
const schema = yup.object().shape({
  catagoryName: yup.string().required("กรุณากรอก Catagory"), //ตั้งไว้ว่า input นี้ต้องกรอกและ เป็น String เท่านั้น ตรง .required("<หากไม่กรอกให้แสดงอะไร>")
});
// -------------------------------- //

const EditPage = () => {
    
  const history = useHistory(); //history Route
  const { id } = useParams(); //Get Params

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  // *** useCallback เพื่อ Cash Function นี้
  const getData = React.useCallback(async () => {
    const url = `https://api.codingthailand.com/api/category/${id}`;
    const res = await axios.get(url);
    setValue("catagoryName", res.data.name);

    //------- set multiple values
    //   setValue([
    //     { test : "1", },
    //     { test1 : "2", },
    //   ])

    //------- set value as object or array
    //   setValue("object", { firstName: "test" })
    //   setValue("array", [{ firstName: "test" }])

  },[id,setValue]); //นำ ID และ SetValue เข้าเป็น dependencies (ไม่ใช่ก็ทำงานได้แต่จะมี เตือนใน Console)

  // useEffct
  React.useEffect(() => {
    getData();
  }, [getData]);

  const onSubmit = async (data) => {
    const url = "https://api.codingthailand.com/api/category";
    const res = await axios.put(url, {
      id: id,
      name: data.catagoryName,
    });
    alert(res.data.message);
    history.replace("/catagory");
  };

  return (
    <>
      <div className="jgetDataumbotron">
        <div className="container">
          <span>
            <AiFillGithub size="2rem" /> {"  "}{" "}
            <a href="https://github.com/oatsadayut/React-app-course">
              https://github.com/oatsadayut/React-app-course
            </a>{" "}
          </span>
          <h1 className="display-3">แก้ไข Catagory</h1>
        </div>
      </div>
      <div className="container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicCatagory">
            <Form.Label>Edit Name</Form.Label>
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

export default EditPage;
