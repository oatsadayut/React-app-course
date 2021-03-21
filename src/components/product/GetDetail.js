import React, { useState, useEffect, useRef } from "react"
import { useParams,useHistory } from "react-router-dom"
import axios from "axios"
import { Badge, Card, Spinner, Button } from "react-bootstrap"

const GetDetail = () => {
  const { id, title, detail_c, view } = useParams() //รับตัวแปรที่มาจาก Params
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const cancelToken = useRef(null) 
  const history = useHistory() //Route History สำหรับ GoBack หรืออื่นๆ

  const getData = async (id) => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://api.codingthailand.com/api/course/${id}`,
        {
          cancelToken: cancelToken.current.token
        }
      )
      setDetail(res.data.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cancelToken.current = axios.CancelToken.source()
    getData(id)
    return () => {
      cancelToken.current.cancel()
    }
  }, [id]) // <= จะทำก็ต่อเมื่อ id มีการเปลี่ยนแปลง

  if (loading === true) {
    return (
      <div className="text-center h-100" style={{ margin: 110 }}>
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
    <div className="container">
      <div className="row mt-2">
        <div className="col-12">
          <Button variant="outline-secondary" onClick={()=>{
              history.goBack()
          }} className=" btn-sm">
            ย้อนกลับ
          </Button>
        </div>
      </div>
      <hr />
      <div className="row mt-2 mb-5">
        <div className="col-md-12">
          <h2>{title}</h2>
          <p>
            <Badge variant="info">View : {view}</Badge>
          </p>
          <h5>{detail_c}</h5>
          <hr />
          <h5>
            <b>รายการสอน</b>
          </h5>
          {detail.length > 0 ? (
            detail.map((d, index) => {
              return (
                <Card key={d.ch_id} border="info" className="my-3">
                  <Card.Header>{d.ch_title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{d.ch_title}</Card.Title>
                    <Card.Text>
                        {d.ch_dateadd}
                        {"  "} <small>View : {d.ch_view}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })
          ) : (
            <div className=" text-center my-5">
              <p>ไม่พบข้อมูล</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GetDetail
