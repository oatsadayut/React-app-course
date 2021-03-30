import React from "react";
import { Navbar, Nav, Form,Button, NavDropdown } from "react-bootstrap";
import { NavLink, useHistory} from "react-router-dom";

const NavBar = () => {

  const history = useHistory()
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
              <NavDropdown.Item onClick={()=>{history.replace('/hospital')}}>Hospital (Pagination)</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{history.replace('/datateble')}}>Hospital (DataTeble)</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
