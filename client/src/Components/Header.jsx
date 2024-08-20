import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import laptop_wave from "../assets/laptop-wave.png"

function Header(){
return(
<Navbar bg="dark" data-bs-theme="dark" className="sticky-top">
        <Container>

          <div className="nav-img">
          <img src={laptop_wave} className="header-img"/>  
          <Navbar.Brand href="/" className="margarine-regular"> KreeBee </Navbar.Brand>
          </div>

          <Nav className="ml-auto nav-wrapper light-h4">
            <Link to="/">Home</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
)
}

export default Header;