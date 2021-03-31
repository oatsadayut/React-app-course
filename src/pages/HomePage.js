import React from "react";
import { AiFillGithub } from "react-icons/ai"; //import icon
import { useQuery } from "react-query"; //React Query
import { Spinner } from "react-bootstrap"


const HomePage = () => {
  // แบบปกติ Basic
  // const { isLoading, error, data } = useQuery("getData", () =>
  //   fetch("https://api.codingthailand.com/api/news?page=1").then((res) =>
  //     res.json()
  //   )
  // );


  //แบบมีการ Cancel Req
  const query = useQuery("getData", () => {
    const controller = new AbortController()
    const signal = controller.signal
    const promise = fetch("https://api.codingthailand.com/api/news?page=1",{
      method:'get',
      signal: signal
    }).then((res) => res.json())

    promise.cancel = () => controller.abort()
    return promise
  })
  
  const { isLoading, error, data } = query


  if (isLoading === true) {
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
        <p>{error.message}</p>
      </div>
    )
  }
  // -----------------------------------------------------------------------------//
  
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
          <h1 className="display-3">Home Page</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data.data.map((news, index) => {
            return (
              <div className="col-md-4" key={news.id}>
                <h2>{news.topic}</h2>
                <p>{news.detail}</p>
                <p>{news.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
