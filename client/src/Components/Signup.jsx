// import React, { useState } from "react";
// import hi from "../assets/hi.png"
// import { useNavigate } from 'react-router-dom'

// import axios from 'axios'

// function Signup() {
//     const [fname, setFirstName] = useState()
//     const [lname, setLastName] = useState()
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()

//     const navigate = useNavigate()

//     const Signup = async(e) => {
//         e.preventDefault();
//         await axios.post("http://localhost:3001/createUser", { fname, lname, email, password })
//             .then(result => {
//                 console.log(result)
//                 navigate("/login")
//             })
//             .catch(err => console.log(err))
//     }


//     // const Signup = (e) => {
//     //     e.preventDefault();
//     //     axios.post("http://localhost:3001/createUser", { fname, lname, email, password })
//     //         .then(result => {
//     //             if (result.status === 201) {
//     //                 navigate("/login");
//     //             }
//     //         })
//     //         .catch(err => {
//     //             if (err.response && err.response.status === 400) {
//     //                 window.alert("Email already exists. Please use a different email.");
//     //             } else {
//     //                 console.log(err);
//     //             }
//     //         });
//     // };

//     return (
//         <div>
//             <form onSubmit={Signup}>
//                 <div className="banner-bg div-height">
//                     <p className="margarine-heading-blog">Signup</p>
//                 </div>

//                 <div className="container pt-main">
//                     <div className="row contact-main">
//                         <div className="col-5 justify-items-end">
//                             <img src={hi} className="contactImage" />
//                         </div>

//                         <div className="col-5">
//                             <p className="margarine-title-blog">Hi Amigo!! Sign up to KreeBee</p>
//                             <div className="mb-3">
//                                 <label className="form-label margarine-regular">First Name</label>
//                                 <input type="text" className="form-control" id="fname" placeholder=" Enter your First Name" required onChange={(e) => setFirstName(e.target.value)} />

//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label margarine-regular">Last Name</label>
//                                 <input type="text" className="form-control" id="lname" placeholder=" Enter your Last Name" required onChange={(e) => setLastName(e.target.value)} />

//                             </div>

//                             <div className="mb-3">
//                                 <label className="form-label margarine-regular">Email address</label>
//                                 <input type="text" className="form-control" id="email" placeholder="name@domain.com" required onChange={(e) => setEmail(e.target.value)} />

//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label margarine-regular">Password</label>
//                                 <input type="password" className="form-control" id="password" required onChange={(e) => setPassword(e.target.value)} />

//                             </div>
//                             <div className="d-grid col-6 ml-auto blog-button margarine-regular">
//                                 <button className="btn btn-dark" >Signup</button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Signup;








import React, { useState } from "react";
import hi from "../assets/hi.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const Signup = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/createUser", { fname, lname, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={Signup}>
        <div className="banner-bg div-height">
          <p className="margarine-heading-blog">Signup</p>
        </div>

        <div className="container pt-main">
          <div className="row contact-main justify-content-center">
            <div className="col-md-5 col-sm-12 justify-content-center mb-4 mb-md-0">
              <img src={hi} className="contactImage img-fluid" alt="Welcome" />
            </div>

            <div className="col-md-5 col-sm-12">
              <p className="margarine-title-blog">Hi Amigo!! Sign up to KreeBee</p>
              <div className="mb-3">
                <label className="form-label margarine-regular">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter your First Name"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label margarine-regular">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter your Last Name"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label margarine-regular">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@domain.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label margarine-regular">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid col-12 col-md-6 ml-auto blog-button margarine-regular">
                <button className="btn btn-dark" type="submit">
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
