import React from "react";
import Nav from 'react-bootstrap/Nav';
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
                    <Link to="/admin-add-blog" className="light-regular">Add Blog</Link>
                    <Link to="/admin-view" className="light-regular">Manage Blogs</Link>
                    <Link to="/inbox" className="light-regular">Inbox</Link>
                    <Link to="/login" className="light-regular">Logout</Link>
                </Nav>
            </div>
        </div>
    );
}

export default AdminSidebar;
