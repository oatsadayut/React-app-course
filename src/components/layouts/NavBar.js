import React from "react";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

//Redux ------------------------------------------------------------
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../redux/action/profileAction";
// -----------------------------------------------------------------

const NavBar = () => {
  const history = useHistory();

  //Redux Dispatch
  const action = useDispatch(); //สร้างตัวแปร action เพื่อใช้งาน Function Dispatch

  //Redux
  const profileRedux = useSelector((state) => state.profileReducer.profile); // ดึงข้อมูลที่อยู่ใน Redux Reducer Profile มาเก็บในตัวแปร profileRedux
  const total = useSelector((state) => state.cartReducer.total);

  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem("pid"));
    if (profileValue) {
      action(updateProfile(profileValue)); //อัพเดทข้อมูลให้ action เพื่อส่งต่อให้ Redux Reducer เพื่ออัพเดทข้อมูลใน Reducer Profile
    }
  };

  React.useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    localStorage.removeItem("pid");
    localStorage.removeItem("token");
    action(updateProfile(null));
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

            <NavLink
              className=" nav-link"
              to="/member"
              activeClassName="active"
            >
              สมาชิก
            </NavLink>
          </Nav>

          {profileRedux ? (
            <>
              <span className=" text-light">
                {profileRedux.name} : {profileRedux.email}
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
                to="/cart"
                activeClassName="active"
              >
                ตะกล้าสินค้า {' '}
                <Badge variant="danger">{total}</Badge>
              </NavLink>
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
