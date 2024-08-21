import React from 'react'
import AdminSidebar from './AdminSidebar';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import laptop_wave from "../assets/laptop-wave.png";

function AdminDashboard() {
    return (
        <div>
            <AdminSidebar />

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
    )
}

export default AdminDashboard;