import React from 'react'
import { Link } from 'react-router-dom';


function Login() {

    return (
        <div >
            <form>
                <div className="banner-bg div-height">
                    <p className="margarine-heading-blog">Login</p>
                </div>
                <div className="row contact-main align-items-start container pt-main">
                    <div className="col-6">
                        <h4 className="margarine-title-blog">Email</h4>
                        <div className="mb-3">
                            <input type="text" className="form-control" required />
                        </div>

                        <h4 className="margarine-title-blog">Password</h4>
                        <div className="mb-3">
                            <input type="password" className="form-control" required />

                        </div>

                        <div className="col-8 blog-button margarine-regular">
                            <button className="btn btn-dark col-6">Login</button>
                            <Link to="/signup" className="btn btn-dark col-6">Sign up</Link>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;