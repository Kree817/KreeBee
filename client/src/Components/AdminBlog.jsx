import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'


function AdminBlog() {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [excerpt, setExcerpt] = useState()
   

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/createBlog", { title, content, excerpt})
            .then(result => {
                console.log(result)
                navigate("/blog")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={Submit}>
                <div className="row align-items-start justify-content-around">
                    <div className="col-8">
                        <h4 className="margarine-title-blog">Blog Title</h4>
                        <div className="mb-3 col-10">
                            <input type="text" className="form-control" required onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <h4 className="margarine-title-blog">Content</h4>
                        <div className="mb-3 col-10">
                            <textarea className="form-control" rows="12" required onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>

                        <h4 className="margarine-title-blog">Excerpt</h4>
                        <div className="mb-3 col-10">
                            <textarea className="form-control" rows="5" required onChange={(e) => setExcerpt(e.target.value)}></textarea>
                        </div>

                        <div className="d-grid col-3 ml-auto blog-button margarine-regular">
                            <button className="btn btn-dark">Add Blog</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminBlog;