import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate, useParams} from "react-router-dom";


function AdminEditBlog() {

    const {id}=useParams()
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [excerpt, setExcerpt] = useState()
   

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3001/getBlog/"+id)
        .then(result=>{console.log(result)
            setTitle(result.data.title)
            setContent(result.data.content)
            setExcerpt(result.data.excerpt)
        })
        .catch(err=>console.log(err))
    },[])

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateBlog/"+id,{title, content, excerpt})
        .then(result=>{
            console.log(result)
            navigate("/admin-view")
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div className="row align-items-start justify-content-around">
                    <div className="col-8">
                        <h4 className="margarine-title-blog">Blog Title</h4>
                        <div className="mb-3 col-10">
                            <input type="text" className="form-control" value= {title} required onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <h4 className="margarine-title-blog">Content</h4>
                        <div className="mb-3 col-10">
                            <textarea className="form-control" rows="12" value={content} required onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>

                        <h4 className="margarine-title-blog">Excerpt</h4>
                        <div className="mb-3 col-10">
                            <textarea className="form-control" rows="5" value={excerpt} required onChange={(e) => setExcerpt(e.target.value)}></textarea>
                        </div>

                        <div className="d-grid col-3 ml-auto blog-button margarine-regular">
                            <button className="btn btn-dark">Update Blog</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminEditBlog;