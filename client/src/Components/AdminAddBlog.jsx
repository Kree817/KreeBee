import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import UserSidebar from './UserSidebar';

function AdminAddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');  // Retrieve token from localStorage

    axios.post("http://localhost:3001/createBlog", { title, content, excerpt }, {
      headers: {
        'Authorization': `Bearer ${token}`  // Include token in Authorization header
      }
    })
    .then(result => {
      console.log(result);
      navigate("/blog");
    })
    .catch(err => {
      console.log(err);
      alert("Failed to add blog. Please make sure you are logged in.");
    });
  };

  return (
    <div className="">
      <UserSidebar />
      <div className="flex-grow-1 p-4">
        <form onSubmit={handleSubmit}>
          <h4 className="margarine-title-blog">Blog Title</h4>
          <div className="mb-3">
            <input type="text" className="form-control" required onChange={(e) => setTitle(e.target.value)} />
          </div>

          <h4 className="margarine-title-blog">Content</h4>
          <div className="mb-3">
            <textarea className="form-control" rows="12" required onChange={(e) => setContent(e.target.value)}></textarea>
          </div>

          <h4 className="margarine-title-blog">Excerpt</h4>
          <div className="mb-3">
            <textarea className="form-control" rows="5" required onChange={(e) => setExcerpt(e.target.value)}></textarea>
          </div>

          <div className="d-grid col-md-3">
            <button className="btn btn-dark">Add Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAddBlog;
