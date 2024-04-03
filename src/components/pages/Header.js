import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import transparent_google from "../Assets/transparent_google.png";
import { AiOutlineHome, AiOutlineWhatsApp } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaDochub } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Header.css";

function Header() {
  return (
    <div className="header_cont">
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand="md"
          className="mb-3"
          collapseOnSelect
        > 
          <Container fluid>
            <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems:"center" }}>
              <img src={transparent_google} width="51px" style={{aspectRatio:"1"}} className="logo_img" />
              <h2 style={{ marginTop: "10px" }} className="logo_txt">
               {" "} Websino
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="nav_p"
                >
                  <p>Welcome to our team</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" eventKey="1">
                    <AiOutlineHome className="n_icon" />
                    Home
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="./About" eventKey="2"><BsFillPersonFill className='n_icon' />About</Nav.Link> */}
                  {/* <Nav.Link href="https://portfolio.skynoveau.in/" eventKey="3"><BiLinkAlt className='n_icon' />Portfolio</Nav.Link> */}
                  <Nav.Link as={Link} to="./documents" eventKey="4">
                    <FaDochub className="n_icon n_iconDoc" />
                    Documents
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="./Payment" eventKey="5">
                    <GiTakeMyMoney className="n_icon" />
                    Payment
                  </Nav.Link> */}
                  {/* <Nav.Link href="https://api.whatsapp.com/send?phone=919360375911&text=Hai%20karthik" eventKey="5"><AiOutlineWhatsApp className='n_icon' />Whatsapp</Nav.Link> */}
                </Nav>

                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    className="nav_v"
                  >
                    <p>version 1.2</p>
                  </Offcanvas.Title>
                </Offcanvas.Header>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
