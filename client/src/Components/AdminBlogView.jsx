import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


function AdminBlogView() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getBlog")
            .then(result => setBlogs(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete=(id)=>{
        
        axios.delete("http://localhost:3001/deleteBlog/"+id)
        .then(result=>{
            console.log(result)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>
                        Date
                    </th>
                    <th>
                        Blog Title
                    </th>
                    <th>
                        Author's Name
                        </th>
                    <th>
                        Actions
                    </th>
                </tr>
                </thead>

                <tbody>

                    {
                        blogs.map((blog) => {
                            return <tr>
                                <td>{blog.createdAt}</td>
                                <td>{blog.title}</td>
                                <td>Author</td>
                                <td>
                                    <Link to={"/admin-edit-blog/" + blog._id} className="btn btn-primary ml-auto blog-button margarine-regular">Edit</Link>
                                    <button className="btn btn-danger ml-auto blog-button margarine-regular" onClick={(e)=>handleDelete(blog._id)} >Delete</button>
                                </td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default AdminBlogView;