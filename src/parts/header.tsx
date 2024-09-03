import * as React from "react";
import tenma from "../images/tenma.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby";
import { pageStyle } from "./styles";

const textOnImage: React.CSSProperties = {
  backgroundImage: `url(${tenma})`,
  // height: '50px',
  backgroundPosition: '0px 0px',
  backgroundSize: 'cover',
  // padding: "48px 5%"
}

const Header: React.FC = () => {
  return (
    <header className="bg-black" style={textOnImage}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka&family=Kosugi+Maru&family=M+PLUS+Rounded+1c:wght@500&family=Varela+Round&display=swap" rel="stylesheet"></link>
      <Container style={pageStyle} className="bg-black">
        <Navbar expand="md" variant="dark">
          <Navbar.Toggle aria-controls="navbarResponsive"  className="ms-auto"/>
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ms-2">
              <Nav.Item as="li">
                <Link to="/" className="nav-link ms-2" activeClassName="active">Home</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/info/" className="nav-link ms-2" activeClassName="active">Info</Link>
              </Nav.Item>
              {/* <Nav.Item as="li">
                <Link to="/ai_art/" className="nav-link ms-2" activeClassName="active">AI Art</Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header;