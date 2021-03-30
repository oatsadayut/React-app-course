import React from "react"
import { AiFillGithub } from "react-icons/ai"
import DataTable from "react-data-table-component"
import axios from "axios"

const HospitalDataTablePage = () => {
  const [data, setData] = React.useState([])
  const getData = async () => {
    try {
      const res = await axios.get("https://api.codingthailand.com/api/course")
      setData(res.data.data)
    } catch (error) {}
  }
  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Detail",
      selector: "detail",
      sortable: true,
    },
    {
      name: "Data",
      selector: "date",
      sortable: true,
      right: true,
    },
    {
      name: "View",
      selector: "view",
      sortable: true,
      right: true,
    },
  ]

  React.useEffect(() => {
    getData()
  }, [])
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
          <h1 className="display-3">Hospital (DataTeble)</h1>
        </div>
      </div>
      <div className="container">
        <DataTable
          title="Production"
          columns={columns}
          data={data}
          selectableRows
          pagination
          paginationPerPage={5}
          dense
          responsive
          defaultSortField="id"
          defaultSortAsc={true}
        />
      </div>
    </>
  )
}

export default HospitalDataTablePage
