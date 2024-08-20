import React from "react";

import Container from "react-bootstrap/esm/Container";
import work from "../assets/work.png"
import coffee from "../assets/coffee.png"
import tired from "../assets/tired.png"
import door_wave from "../assets/waving-doorway.png"
import wall_burst from "../assets/wall-burst.png"
import food from "../assets/food.png"
import laptop_wave from "../assets/laptop-wave.png"
import hi from "../assets/hi.png";
import hike from "../assets/hiking.png"


function Gallery() {
    return (
        <div>
             <div className="banner-bg div-height">
             <p className="margarine-heading-blog">Gallery</p>
                </div>
        <div className="container pt-main">
                <div className="gallery">

                    <img className="four-grid-cells" src={door_wave} />

                    <img src={food} />

                    <img className="wide-image" src={wall_burst} />

                    <img src={hi} />

                    <img src={coffee} />

                    <img src={work} />

                    <img src={laptop_wave} />

                    <img className="wide-image" src={tired} />

                    <img src={hike} />

                    {/* <img
                    src="https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg"
                    alt="Shining Stars Image" /> */}

                </div>
        </div>
        </div>
    )
}

export default Gallery;