import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Table, Image, Badge, Spinner } from "react-bootstrap"
import { format } from "date-fns"
import { th } from "date-fns/locale"
const GetProduct = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const cancelToken = useRef(null) //useRef มัมจะเก็บค่าที่ไม่เปลี่ยนไปแม้จะรีcomponent //Clear Ram

  const getData = async () => {
    try {
      setLoading(true)
      const res = await axios.get("https://api.codingthailand.com/api/course",{
          cancelToken : cancelToken.current.token //Clear Ram : สร้างตัวแปรเก็บ Token เพื่อใช้ในการเคียร์ Ram
      })
      setProduct(res.data.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    cancelToken.current = axios.CancelToken.source //Clear Ram : เก็บ Token ไว้ใน useRef ที่เราสร้างไว้

    getData()

    return (()=>{
      cancelToken.current.cancel() //Clear Ram : ยกเลิก Token ที่เราเก็บไว้
    })
    

  },[])

  if (loading === true) {
    return (
      <div className="text-center h-100" style={{margin:110}}>
      <p>กรุณารอสักครู่</p>
      <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  if (error) {
    return (

        <div className="my-5 py-5 text-center text-danger h-100">
          <p>เกิดข้อผิดพลาด</p>
          <p>{error.response.data.message}</p>
        </div>

    )
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
          )
        })}
      </tbody>
    </Table>
  )
}

export default GetProduct
