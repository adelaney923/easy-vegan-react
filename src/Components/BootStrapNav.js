import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../bootstrapnav.css'
import { Navbar, Container, Offcanvas, Collapse, Nav } from "react-bootstrap";

const BootstrapNav = () => {
    // const [isActive, setActive] = useState("false");
    // const collapseNav = () => {

    // }

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/">
              <span className="easy">easy</span>
              <span className="vegan">vegan</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <Link to="/">
                    <span className="easy">easy</span>
                    <span className="vegan">vegan</span>
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/recipes">Recipes</Link>
                  <Link to="/whyvegan">Why go Vegan</Link>
                  <Link to="/vegannews">Vegan News</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default BootstrapNav;
