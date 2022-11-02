import * as React from "react";
import tenma from "../images/tenma.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { text } from "stream/consumers";
import { Link } from "gatsby";

const pageStyle: React.CSSProperties = {
  color: "#232129",
  padding: "0%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const imageStyle: React.CSSProperties = {
  objectFit: "cover",
  objectPosition: "0% 11.5%"
}

const textOnImage: React.CSSProperties = {
  backgroundImage: `url(${tenma})`,
  // height: '50px',
  backgroundPosition: '0px 0px',
  backgroundSize: 'cover',
  // padding: "48px 5%"
}

const ulStyle: React.CSSProperties = {
  listStyle: "none"
}

const Header: React.FC = () => {
  return (
    <header className="bg-black" style={textOnImage}>
      <Container style={pageStyle}>
        <Navbar expand="md" variant="dark">
          <Navbar.Toggle aria-controls="navbarResponsive"  className="ms-auto"/>
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="me-auto">
              <Nav.Item as="li">
                <Link to="/" className="nav-link ms-2" activeClassName="active">Home</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/info/" className="nav-link ms-2" activeClassName="active">Info</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Container> 
    </header>
  )
}

export default Header;