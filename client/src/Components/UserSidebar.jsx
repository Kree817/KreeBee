// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Modal, Button, ListGroup } from 'react-bootstrap';
// import laptop_wave from "../assets/laptop-wave.png"; // Fixed import statement

// function UserSidebar() {
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Perform logout logic, e.g., clearing tokens
//     localStorage.removeItem('token');
//     navigate("/login");
//   };

//   const handleShow = () => setShowLogoutModal(true);
//   const handleClose = () => setShowLogoutModal(false);

//   return (
//     <div className="list-Horizontal">
//       <div className=" " style={{ width: '250px' }}>
//        <div className="list">
//         <ListGroup variant="flush">
//           <ListGroup.Item as={Link} to="/" className="">Home</ListGroup.Item>
//           <ListGroup.Item as={Link} to="/admin-add-blog" className="">Start a Blog</ListGroup.Item>
//           <ListGroup.Item as={Link} to="" onClick={(e) => { e.preventDefault(); handleShow(); }} className="">Logout</ListGroup.Item>
//         </ListGroup>
//       </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       <Modal show={showLogoutModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Logout</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to log out?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="dark" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default UserSidebar;



















import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, ListGroup } from 'react-bootstrap';
// import laptop_wave from "../assets/laptop-wave.png"; 

function UserSidebar() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout logic-clearing tokens
    localStorage.removeItem('token');
    navigate("/login");
  };

  const handleShow = () => setShowLogoutModal(true);
  const handleClose = () => setShowLogoutModal(false);

  return (
    <div className="list-Horizontal">
      <div className="sidebar-container" style={{ width: '100%' }}>
        {/* <div className="d-flex align-items-center mb-4">
          <img src={laptop_wave} className="header-img me-2" alt="Logo" />
          <span className="margarine-regular">KreeBee</span>
        </div> */}
        <div className="list d-flex">
          <ListGroup horizontal className="flex-row w-100">
            <ListGroup.Item as={Link} to="/user-dashboard" className="list-item">Home</ListGroup.Item>
            <ListGroup.Item as={Link} to="/admin-add-blog" className="list-item">Start a Blog</ListGroup.Item>
            <ListGroup.Item as={Link} to="" onClick={(e) => { e.preventDefault(); handleShow(); }} className="list-item">Logout</ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal show={showLogoutModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserSidebar;
