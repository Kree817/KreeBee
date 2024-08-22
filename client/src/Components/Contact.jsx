
// import React, { useState } from "react";
// import hii from "../assets/hii.png";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Contact() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const Submit = (e) => {
//         e.preventDefault();

//         // Retrieve token from localStorage (or wherever you store it)
//         const token = localStorage.getItem('token');

//         axios.post("http://localhost:3001/createContact", { name, email, message }, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then(result => {
//             console.log(result);
//             navigate("/");
//         })
//         .catch(err => {
//             console.log(err);
//             alert("Unauthorized or error occurred.");
//         });
//     };

//     return (
//         <div>
//             <form onSubmit={Submit}>
//                 <div className="banner-bg div-height">
//                     <p className="margarine-heading-blog">Contact</p>
//                 </div>

//                 <div className="container pt-main">
//                     <div className="row contact-main">
//                         <div className="col-5 justify-items-end">
//                             <img src={hii} className="contact-image" />
//                         </div>

//                         <div className="col-5">
//                             <p className="margarine-title-blog">Feel Free to Drop me a Mail !!</p>
//                             <div className="mb-3">
//                                 <label className="form-label margarine-regular">Full Name</label>
//                                 <input type="text" className="form-control" id="name" placeholder="Enter your Good Name" onChange={(e) => setName(e.target.value)} />
//                             </div>

//                             <div className="mb-3">
//                                 <label className="form-label margarine-regular">Email address</label>
//                                 <input type="text" className="form-control" id="email" placeholder="name@domain.com" onChange={(e) => setEmail(e.target.value)} />
//                             </div>

//                             <div className="mb-3">
//                                 <label className="form-label margarine-regular">Message</label>
//                                 <textarea className="form-control" id="message" rows="3" onChange={(e) => setMessage(e.target.value)} />
//                             </div>

//                             <div className="d-grid col-6 ml-auto blog-button margarine-regular">
//                                 <button className="btn btn-dark">Send Message</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="padding-top contact-map">
//                         <iframe
//                             width="1100"
//                             height="350"
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.317149365015!2d85.28484715531036!3d27.708954226764128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1720594255453!5m2!1sen!2sin">
//                         </iframe>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Contact;

















import React, { useState } from "react";
import hii from "../assets/hii.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();

        // Retrieve token from localStorage (or wherever you store it)
        const token = localStorage.getItem('token');

        axios.post("http://localhost:3001/createContact", { name, email, message }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(result => {
            console.log(result);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
            alert("Unauthorized or error occurred.");
        });
    };

    return (
        <div>
            <form onSubmit={Submit}>
                {/* Banner Section */}
                <div className="banner-bg div-height">
                    <p className="margarine-heading-blog">Contact</p>
                </div>

                {/* Contact Image First */}
                <div className="container pt-main">
                    <div className="imageContainer">
                        {/* Contact Image */}
                        <div className="contactImageCon">
                            <img src={hii} className="contactImage" />
                        </div>

                        {/* Contact Form */}
                        <div className="contactform">
                            <p className="margarine-title-blog">Feel Free to Drop me a Mail !!</p>
                            <div className="mb-3">
                                <label className="form-label margarine-regular">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your Good Name" onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label margarine-regular">Email address</label>
                                <input type="text" className="form-control" id="email" placeholder="name@domain.com" onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label margarine-regular">Message</label>
                                <textarea className="form-control" id="message" rows="3" onChange={(e) => setMessage(e.target.value)} />
                            </div>

                            <div className="d-grid col-6 ml-auto blog-button margarine-regular">
                                <button className="btn btn-dark">Send Message</button>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="padding-top contact-map">
                        <iframe
                            width="1100"
                            height="350"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.317149365015!2d85.28484715531036!3d27.708954226764128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1720594255453!5m2!1sen!2sin">
                        </iframe>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
