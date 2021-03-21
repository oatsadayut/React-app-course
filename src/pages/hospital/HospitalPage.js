import React from "react"
import { Spinner, Table } from "react-bootstrap"
import { AiFillGithub } from "react-icons/ai"
import Pagination from "react-js-pagination";
import axios from "axios"

const perPage = 10
const HospitalPage = () => {
  const [hospital, setHospital] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [page, setPage] = React.useState(1)
  const [total, setToTal] = React.useState(0)
  const cancelToken = React.useRef(null)



  const getData = async (page) => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${perPage}`,
        {
          cancelToken: cancelToken.current.token
        }
      )
      setHospital(res.data.data)
      setToTal(res.data.meta.pagination.total)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source()
    getData(page)
    return () => {
        cancelToken.current.cancel()
    }
  },[page])

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

  const handlePageChange = (pageNumber)=>{
    setPage(pageNumber)
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
          <h1 className="display-3">Hospital (Pagination)</h1>
        </div>
      </div>
      <div className="container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>Hospital Name</th>
              <th>Hospital Code</th>
            </tr>
          </thead>
          <tbody>
            {hospital.map((h, index) => {
              return (
                <tr key={h.id}>
                  <td>{h.id}</td>
                  <td>{h.h_name}</td>
                  <td>{h.code}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Pagination
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
          firstPageText="หน้าแรก"
          lastPageText="หน้าสุดท้าย"
          prevPageText="ก่อนหน้า"
          nextPageText="ถัดไป"
        />
      </div>
    </>
  )
}

export default HospitalPage
