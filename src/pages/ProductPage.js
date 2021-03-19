import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table,Image } from "react-bootstrap"
import { AiFillGithub } from "react-icons/ai"
const ProductPage = () => {
  const [product, setProduct] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get("https://api.codingthailand.com/api/course")
      setProduct(res.data.data)
    } catch (error) {}
  }

  useEffect(() => {
    getData()
  })

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
          <h1 className="display-3">Product Page</h1>
        </div>
      </div>
      <div className="container">
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
                  <td>{p.date}</td>
                  <td>{p.view}</td>
                  <td><Image src={p.picture} alt={p.title} width='40' roundedCircle  /></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
}
export default ProductPage
