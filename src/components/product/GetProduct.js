import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Image, Badge, Spinner } from "react-bootstrap";
import { format } from "date-fns";
import { th } from "date-fns/locale";
const GetProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      setProduct(res.data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  },[]);

  if (loading === true) {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>หัวข้อ</th>
            <th>รายละเอียด</th>
            <th>Date</th>
            <th>View</th>
            <th>รูปภาพ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className=" bg-white" height="300">
              <div className="my-5 py-5 text-center h-100">
                <Spinner animation="grow" variant="primary" />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>หัวข้อ</th>
          <th>รายละเอียด</th>
          <th>Date</th>
          <th>View</th>
          <th>รูปภาพ</th>
        </tr>
      </thead>
      <tbody>
        {product.map((p, index) => {
          return (
            <tr key={p.id}>
              <td>{index + 1}</td>
              <td>{p.title}</td>
              <td>{p.detail}</td>
              <td>{format(new Date(p.date), "dd MMM yyyy", { locale: th })}</td>
              <td>
                <Badge variant="warning">{p.view}</Badge>
              </td>
              <td>
                <Image src={p.picture} alt={p.title} width="40" roundedCircle />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default GetProduct;
