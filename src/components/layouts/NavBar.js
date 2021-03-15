import React from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import { NavLink } from "react-router-dom"

const NavBar = () => {
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
            <NavLink className=' nav-link' to="/" exact activeClassName="active">หน้าแรก</NavLink>
            <NavLink className=' nav-link' to="/about" activeClassName='active'>เกี่ยวกับเรา</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavLink className=" dropdown-item" exact activeClassName="active" to="/">หน้าแรก</NavLink>
              <NavLink className=" dropdown-item" activeClassName="active" to="/about">เกี่ยวกับเรา</NavLink>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
