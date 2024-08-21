// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function Login() {
    
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()
//     const navigate = useNavigate()

//     const handleLogin = (e) => {
//         e.preventDefault()
//         axios.post("http://localhost:3001/login", { email, password })
//         .then(result => {
//             console.log(result)
//             if(result.data === "Success"){
//                 navigate("/admin-dashboard")
//             }else{
//                 navigate("/login")
//                 alert("You are not registered to this service")

//             }
       
//         })
//         .catch(err => console.log(err))
//     }
//     return (
//         <div>
//             <form onSubmit={handleLogin}>
//                 <div className="banner-bg div-height">
//                     <p className="margarine-heading-blog">Login</p>
//                 </div>
//                 <div className="row contact-main align-items-start container pt-main">
//                     <div className="col-6">
//                         <h4 className="margarine-title-blog">Email</h4>
//                         <div className="mb-3">
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 required
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 aria-label="Email"
//                             />
//                         </div>

//                         <h4 className="margarine-title-blog">Password</h4>
//                         <div className="mb-3">
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 required
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 aria-label="Password"
//                             />
//                         </div>

//                         <div className="col-8 blog-button margarine-regular">
//                             <button className="btn btn-dark col-6">Login</button>
//                             <Link to="/signup" className="btn btn-dark col-6">Sign up</Link>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Login;




























import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:3001/login", { email, password });
            const token = result.data.token;
            
            if (token) {
                localStorage.setItem('token', token);  // Store JWT token in localStorage
                navigate("/user-dashboard");         // Redirect to dashboard
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (err) {
            console.log(err);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="banner-bg div-height">
                    <p className="margarine-heading-blog">Login</p>
                </div>
                <div className="row contact-main align-items-start container pt-main">
                    <div className="col-6">
                        <h4 className="margarine-title-blog">Email</h4>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label="Email"
                            />
                        </div>

                        <h4 className="margarine-title-blog">Password</h4>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-label="Password"
                            />
                        </div>

                        <div className="col-8 blog-button margarine-regular">
                            <button className="btn btn-dark col-6" type="submit">Login</button>
                            <Link to="/signup" className="btn btn-dark col-6">Sign up</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
