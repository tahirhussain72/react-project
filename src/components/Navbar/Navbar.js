import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { menuItem, topMenuLeft, topMenuRight } from "../../data/constant/menuItem";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function BasicExample() {
   const [active, setActive] = useState(menuItem[0])
   //   console.log(active)
   return (
      <header >
         <Container fluid className='top-nav'>
            <Row>
               <Col md={10} className="top-nav-left">
                  {
                     topMenuLeft.map((item, i) => (
                        <div key={i}>
                           <span>{item.icon}</span>
                           {item.text}

                        </div>
                     ))
                  }
               </Col>
               <Col md={2} className="top-nav-right">
                  {
                     topMenuRight.map((item, i) => (
                        <div key={i}>
                           {item}
                        </div>
                     ))
                  }

               </Col>
            </Row>
         </Container>
         <Navbar expand="lg" className="main-nav">
            <Container fluid className="nav-fluid">
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     {menuItem.map((item, i) => (
                        <Link
                           key={i}
                           to={item.path}
                           className={`${active === item}?'active':''`}
                           onClick={() => {
                              setActive(item)
                           }}
                        >
                           {item.title}
                        </Link>
                     ))}
                  </Nav>
               </Navbar.Collapse>
               <Button variant="primary" className="nav-btn">
                  Get a qoute
               </Button>{" "}
            </Container>
         </Navbar>
      </header>
   );
}

export default BasicExample;
