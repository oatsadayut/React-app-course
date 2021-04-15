import React from "react";
import { AiFillGithub, AiFillEdit, AiFillDelete } from "react-icons/ai"; //import icon
import { Table, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const IndexPage = () => {
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [catagory, setCatagory] = React.useState([]);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null); //useRef จะเก็บค่าที่ไม่เปลี่ยนไปแม้จะรีcomponent //Clear Ram

  // Get Data
  const getData = async () => {
    let url = "https://api.codingthailand.com/api/category";
    try {
      setLoading(true);
      const res = await axios.get(url, {
        cancelToken: cancelToken.current.token, //Clear Ram : สร้างตัวแปรเก็บ Token เพื่อใช้ในการเคียร์ Ram
      });
      setCatagory(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //Delete Data
  const deleteData = async (id, name) => {
    let isConfirm = window.confirm(`คุณต้องการจะลบข้อมูล ${name} หรือไม่`);
    if (isConfirm === true) {
      const res = await axios.delete(
        `https://api.codingthailand.com/api/category/${id}`
      );
      alert(res.data.message);
      history.go(0);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source(); //Clear Ram : เก็บ Token ไว้ใน useRef ที่เราสร้างไว้
    getData();
    return () => {
      cancelToken.current.cancel(); //Clear Ram : ยกเลิก Token ที่เราเก็บไว้
    };
  }, []);

  if (loading === true) {
    return (
      <div className="text-center h-100" style={{ margin: 110 }}>
        <p>กรุณารอสักครู่</p>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-5 py-5 text-center text-danger h-100">
        <p>เกิดข้อผิดพลาด</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

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
          <h1 className="display-3">CRUD Catagory</h1>
        </div>
      </div>
      <div className="container">
        <Button
          variant="primary"
          onClick={() => {
            history.replace("/catagory/create");
          }}
        >
          Create Catagory
        </Button>
        <hr />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ประเภทสินค้า</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {catagory.map((c, index) => {
              return (
                <tr key={c.id}>
                  <td>{index + 1}</td>
                  <td>{c.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        history.push(`/catagory/edit/${c.id}`);
                      }}
                    >
                      <AiFillEdit />
                    </button>
                    <button onClick={() => deleteData(c.id, c.name)}>
                      {" "}
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default IndexPage;
