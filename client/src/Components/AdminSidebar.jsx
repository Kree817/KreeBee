import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import laptop_wave from "../assets/laptop-wave.png";

function AdminSidebar() {
    return (
        <div className="d-flex">
            <div className="bg-dark text-white p-3 vh-100" style={{ width: '250px' }}>
                <div className="d-flex align-items-center mb-4">
                    <img src={laptop_wave} className="header-img me-2" alt="Logo" />
                    <span className="margarine-regular">KreeBee</span>
                </div>
                <Nav className="flex-column">
                    <Link to="/" className="light-regular">Home</Link>
                    <Link to="/admin-view" className="light-regular">Manage Blogs</Link>
                    <Link to="/inbox" className="light-regular">Inbox</Link>
                    <Link to="/login" className="light-regular">Logout</Link>
                </Nav>
            </div>

            <div className="flex-grow-1">
                <Navbar bg="dark" variant="dark" className="sticky-top">
                    <Container>
                        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                            <img src={laptop_wave} className="header-img" alt="Logo" />
                            <span className="margarine-regular">KreeBee</span>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Container className="mt-4">
                    <h1>Welcome to KreeBee</h1>
                    <p>Let's get Started !!</p>
                </Container>
            </div>
        </div>
    );
}

export default AdminSidebar;
