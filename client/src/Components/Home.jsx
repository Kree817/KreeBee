import React from "react";

import work from "../assets/work.png"
import coffee from "../assets/coffee.png"
import tired from "../assets/tired.png"
import door_wave from "../assets/waving-doorway.png"
import hike from "../assets/hiking.png"
import wall_burst from "../assets/wall-burst.png"

import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={door_wave} className="home-image" />
                    </div>

                    <div className="col">
                        <p className="margarine-heading home-heading">Step into the Voyage</p>
                        <p className="margarine-regular home-para">
                        Welcome to your new favorite place to share ideas, stories, and whatever’s on your mind! Whether you’re
                         here to write, rant, or just explore, we’re all about making it 
                        easy and fun to get your thoughts out there. So grab a coffee, get comfy, and let’s start blogging!
                        </p>
                        <div className="d-grid gap-2 col-6 ml-auto light-regular">
                            <Link to="/blog" className="btn btn-dark">Explore Blogs</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="home-img-container">
                <div className="home-img-all">
                    <img src={hike} />
                    <img src={work} />
                    <img src={coffee} />
                    <img src={tired} />
                    <img src={wall_burst} />
                </div>
            </div>


        </div >

    )
}

export default Home;