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
import './App.css';

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="body main-header py-2">
      <Navbar className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <NavbarBrand
            className="brand text-white navbar-brand animated infinite shake"
            href="/"
          >
            Learnian
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" expand="lg" navbar>
              <Form className="form-inline my-2 my-lg-auto mr-auto">
                <NavItem>
                  <NavLink
                    className="btn btn-transparent px-4"
                    id="login"
                    href="/user/login"
                  >
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    id="signup"
                    className="btn btn-white btn-rounded shadow-lg px-4"
                    href="/user/signup"
                  >
                    Sign up
                  </NavLink>
                </NavItem>
              </Form>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <div className="main-header Header">
        <div
          className="header-container position-relative"
          style={{ padding: '150px 0', overflowX: 'hidden' }}
        >
          <div className="container">
            <div className="header-context">
              <span className="small">Online Education</span>
              <h1 className="h3">Live. Learn. Share!</h1>
              <p className="header-description">
                Get instant access to hundreds of textbooks, course notes,
                (solved) assignments and lots of other resources that makes
                schooling easier on you. All you gotta do is help someone else
              </p>
              <div className="d-flex mt-4">
                <a
                  href="/"
                  className="btn btn-accent btn-rounded px-4 shadow-lg"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute d-md-block"
            style={{
              right: '-10px',
              top: '0',
              width: '45%',
              maxWidth: '500px',
              display: 'none'
            }}
          >
            <img src="/images/Img.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
