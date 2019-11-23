import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form
} from 'reactstrap';
import "./App.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="main-header navbar bg-transparent pt-2" color="faded" light expand="lg">
        <div className="container">
        <NavbarBrand className="brand text-white navbar-brand animated infinite shake" href="/">Learnian</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" expand="lg" navbar>
            <Form className="form-inline my-2 my-lg-auto mr-auto">
            <NavItem>
              <NavLink className="btn btn-transparent px-4"  id="login" href="/user/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="signup" className="btn btn-white btn-rounded shadow-lg px-4" href="/user/signup">Sign up</NavLink>
            </NavItem>
            </Form>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
      <div className="main-header">
        <div className="header-container position-relative">

        </div>
      </div>
    </div>
  );
}

export default Example;