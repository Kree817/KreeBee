import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import laptop_wave from "../assets/laptop-wave.png"
import icon1 from "../assets/1.png"
import icon2 from "../assets/2.png"
import icon3 from "../assets/3.png"
import icon4 from "../assets/4.png"


function Footer() {

  // const [blogs, setBlogs] = useState([]);

  //   useEffect(() => {
  //       axios.get("http://localhost:3001/getBlog")
  //           .then(result => setBlogs(result.data))
  //           .catch(err => console.log(err))
  //   }, [])

  return (
    <div className="footer-main">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="ml-auto footer-wrapper">

            <div className="row footer-row">

              <div className="col footer-col">
                <div>
                <img src={laptop_wave} className="footer-img" />
                <Navbar.Brand href="/" className="margarine-regular">KreeBee</Navbar.Brand>
                </div>
              </div>

              <div className="col footer-col">
                <h4 className="light-h4">Quick Links</h4>
                <ul type="none" className="light-regular">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/blog">Blogs</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>              

              <div className="col footer-col">
              <h4 className="light-h4">Location</h4>
                <iframe
                  width="200"
                  height="100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.317149365015!2d85.28484715531036!3d27.708954226764128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1720594255453!5m2!1sen!2sin">
                  </iframe>
              </div>

              <div className="col footer-col">
              <h4 className="light-h4">Social Links</h4>
              <div className="footer-icons">
                  <a href ="https://www.instagram.com/" target="_blank"><img src={icon1} className="footer-icon"/></a>
                  <a href ="https://www.facebook.com/" target="_blank"><img src={icon2} className="footer-icon"/></a>
                  <a href ="https://www.x.com/" target="_blank"><img src={icon3} className="footer-icon"/></a>
                  <a href ="https://www.linkedin.com/" target="_blank"><img src={icon4} className="footer-icon"/></a>
                </div>
              </div>

            </div>
          </Nav>

        </Container>
      </Navbar>
    </div>
  )
}

export default Footer;