// import React, { useEffect } from "react";
// import { useState } from "react";
// import axios from 'axios'
// import {useParams} from "react-router-dom";

// import keyboard from "../assets/keyboard-skate.png"

// import ad1 from "../assets/ad1.jpeg"
// import ad2 from "../assets/ad2.jpeg"
// import ad3 from "../assets/ad3.jpeg"
// import ad4 from "../assets/ad4.jpeg"
// import ad5 from "../assets/ad5.jpeg"
// import ad6 from "../assets/ad6.jpeg"




    
// function BlogDetail() {

//     const {id}=useParams()
//     const [title, setTitle] = useState()
//     const [createdAt, setCreatedAt] = useState()
//     const [content, setContent] = useState()
 

//     useEffect(()=>{
//         axios.get("http://localhost:3001/getBlog/"+id)
//         .then(result=>{console.log(result)
//             setTitle(result.data.title)
//             setCreatedAt(result.data.createdAt)
//             setContent(result.data.content)
            
//         })
//         .catch(err=>console.log(err))
//     },[])

//     return (
//         <div>
//             <div className="banner-bg div-height">
//                 <p className="margarine-heading-blog">Blog Detail</p>
//             </div>

//             <div className="container pt-main">
//                 {/* <div className="gallery">
//                     <img src={door_wave} />
//                 </div> */}

//                 <div className="row align-items-start justify-content-around">
//                     <div className="col-8">
//                         <h4 className="margarine-title-blog">{title}</h4>
//                         <p className="margarine-regular-small-blog pb-3">{createdAt}</p>

//                         <p className="margarine-regular-blog-paragraph">{content}</p>

//                         <hr />

//                         <div className="row align-items-start justify-content-around">
//                             <div className="col-8">
//                                 <h4 className="margarine-title-blog">Leave a Comment</h4>
//                                 <div className="mb-3 col-10">
//                                     <textarea className="form-control" id="message" rows="3"></textarea>
//                                 </div>
//                                 <div className="d-grid col-3 ml-auto blog-button margarine-regular">
//                                     <button className="btn btn-dark" type="button">Comment</button>
//                                 </div>
//                             </div>

//                             <div className="col-4">
//                                 <img src={keyboard}/>
//                             </div>
//                         </div>
//                         </div>


//                         {/* ....................Ads.............. */}
//                         <div className="col-3">
//                             <img src={ad1} className="py-2" />
//                             <img src={ad2} className="py-2" />
//                             <img src={ad3} className="py-2" />
//                             <img src={ad4} className="py-2" />
//                             <img src={ad5} className="py-2" />
//                             <img src={ad6} className="py-2" />
//                         </div>
//                     </div>
//                 </div >
//             </div >
//             )
// }

//             export default BlogDetail;








import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import keyboard from "../assets/keyboard-skate.png";
import ad1 from "../assets/ad1.jpeg";
import ad2 from "../assets/ad2.jpeg";
import ad3 from "../assets/ad3.jpeg";
import ad4 from "../assets/ad4.jpeg";
import ad5 from "../assets/ad5.jpeg";
import ad6 from "../assets/ad6.jpeg";

function BlogDetail() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3001/getBlog/${id}`)
            .then(result => {
                console.log(result);
                setTitle(result.data.title);
                setCreatedAt(result.data.createdAt);
                setContent(result.data.content);
            })
            .catch(err => {
                console.log(err);
                alert("Blog not found.");
            });
    }, [id]);

    return (
        <div>
            <div className="banner-bg div-height">
                <p className="margarine-heading-blog">Blog Detail</p>
            </div>

            <div className="container pt-main">
                <div className="row align-items-start justify-content-around">
                    <div className="col-8">
                        <h4 className="margarine-title-blog">{title}</h4>
                        <p className="margarine-regular-small-blog pb-3">{createdAt}</p>

                        <p className="margarine-regular-blog-paragraph">{content}</p>

                        <hr />

                        <div className="row align-items-start justify-content-around">
                            <div className="col-8">
                                <h4 className="margarine-title-blog">Leave a Comment</h4>
                                <div className="mb-3 col-10">
                                    <textarea className="form-control" id="message" rows="3"></textarea>
                                </div>
                                <div className="d-grid col-3 ml-auto blog-button margarine-regular">
                                    <button className="btn btn-dark" type="button">Comment</button>
                                </div>
                            </div>

                            <div className="col-4">
                                <img src={keyboard} />
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <img src={ad1} className="py-2" />
                        <img src={ad2} className="py-2" />
                        <img src={ad3} className="py-2" />
                        <img src={ad4} className="py-2" />
                        <img src={ad5} className="py-2" />
                        <img src={ad6} className="py-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
