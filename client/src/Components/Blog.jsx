import React from "react";
import work from "../assets/work.png"
import coffee from "../assets/coffee.png"
import tired from "../assets/tired.png"
import door_wave from "../assets/waving-doorway.png"
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function Blog() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getBlog")
            .then(result => setBlogs(result.data))
            .catch(err => console.log(err))
    }, [])

    return (
        
        <div>
            <div className="banner-bg div-height">
                <p className="margarine-heading-blog">Blogs</p>
            </div>

            <div className="container pt-main">
                <div className="row align-items-start">
                    {/* <div className="col-4">
                        <img src={work} className="blog-image" />
                    </div> */}

                    {
                        blogs.map((blog)=>{
                          return  <div className="col-6 pb-5">
                            <div className="margarine-title-blog" id="blog1">{blog.title}</div>
                            <div className="margarine-regular-small-blog ">{blog.createdAt} - Admin</div>
                            <div>
                                <p className="margarine-regular-blog">
                                    {blog.excerpt}
                                </p>
                            </div>

                            <div className="d-grid gap-2 col-6 ml-auto blog-button light-regular">
                            <Link to={"/blog-detail/" + blog._id} className="btn btn-dark ml-auto blog-button margarine-regular">Read More</Link>                            </div>

                        </div>
                        })
                           
                        
                    }

                </div>

                
            </div>
        </div>
    )
}

export default Blog;