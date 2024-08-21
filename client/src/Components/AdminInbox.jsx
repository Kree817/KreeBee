import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


function AdminInbox() {

    const [contacts, setmessage] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getBlog")
            .then(result => setmessage(result.data))
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
                        S No.
                    </th>
                    <th>
                        User
                    </th>
                    <th>
                        Email
                        </th>
                    <th>
                        Message
                    </th>
                </tr>
                </thead>

                <tbody>

                    {
                        message.map((contacts) => {
                            return <tr>
                                <td>#</td>
                                <td>User</td>
                                <td>{Contact.email}</td>
                                <td>{Contact.message}</td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default AdminInbox;