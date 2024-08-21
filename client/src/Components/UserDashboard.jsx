import React from 'react';
import UserSidebar from './UserSidebar';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserDashboard() {
  return (
    <div className="d-flex">
      <UserSidebar />

      <div className="flex-grow-1">
        <Navbar bg="dark" variant="dark" className="sticky-top">
          <Container>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
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

export default UserDashboard;
