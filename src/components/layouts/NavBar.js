import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const [profile, setProfile] = React.useState(null);

  const getProfile = () => {
    console.log('get profile')
    const proFileValue = JSON.parse(localStorage.getItem("pid"));
    if (proFileValue) {
      setProfile(proFileValue);
    }
  };

  React.useEffect(() => {
    getProfile();
  },[]);

  const logOut = () => {
    localStorage.removeItem("pid");
    localStorage.removeItem("token");
    history.go(0);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink className="navbar-brand" to="/" exact activeClassName="active">
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {"  "}
          <span>My-app2</span>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              className=" nav-link"
              to="/"
              exact
              activeClassName="active"
            >
              หน้าแรก
            </NavLink>
            <NavLink
              className=" nav-link"
              to="/product"
              activeClassName="active"
            >
              สินค้า
            </NavLink>
            <NavLink className=" nav-link" to="/about" activeClassName="active">
              เกี่ยวกับเรา
            </NavLink>
            <NavDropdown title="Workshop" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/hospital");
                }}
              >
                Hospital (Pagination)
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/datateble");
                }}
              >
                Hospital (DataTeble)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/catagory");
                }}
              >
                CRUD Catagory
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              className=" nav-link"
              to="/upload"
              activeClassName="active"
            >
              อัพโหลดไฟล์
            </NavLink>
          </Nav>

          {profile ? (
            <>
              <span className=" text-light">
                {profile.name} : {profile.email}
              </span>
              <button
                className=" btn btn-danger text-light mx-2"
                onClick={logOut}
              >
                Log Out
              </button>
            </>
          ) : (
            <Nav>
              <NavLink
                className=" nav-link"
                to="/register"
                activeClassName="active"
              >
                สมัตรสมาชิก
              </NavLink>
              <NavLink
                className=" nav-link"
                to="/login"
                activeClassName="active"
              >
                เข้าสู่ระบบ
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
