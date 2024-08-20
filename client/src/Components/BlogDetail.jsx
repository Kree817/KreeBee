import React from "react";

import keyboard from "../assets/keyboard-skate.png"

import ad1 from "../assets/ad1.jpeg"
import ad2 from "../assets/ad2.jpeg"
import ad3 from "../assets/ad3.jpeg"
import ad4 from "../assets/ad4.jpeg"
import ad5 from "../assets/ad5.jpeg"
import ad6 from "../assets/ad6.jpeg"


function BlogDetail() {
    return (
        <div>
            <div className="banner-bg div-height">
                <p className="margarine-heading-blog">Blog Detail</p>
            </div>

            <div className="container pt-main">
                {/* <div className="gallery">
                    <img src={door_wave} />
                </div> */}

                <div className="row align-items-start justify-content-around">
                    <div className="col-8">
                        <h4 className="margarine-title-blog">Exploring the Great Outdoors: A Journey Through Nature</h4>
                        <p className="margarine-regular-small-blog pb-3">July 8, 2024</p>

                        <p className="margarine-regular-blog-paragraph">There's something incredibly rejuvenating about spending a day
                            immersed in nature. Recently, I had the pleasure of embarking
                            on a hiking adventure that took me through breathtaking landscapes,
                            serene forests, and up to awe-inspiring viewpoints. Here's a
                            recount of that memorable experience.</p>

                        <h3 className="margarine-regular">The Beginning: Setting Out</h3>
                        <p className="margarine-regular-blog-paragraph">Early in the morning, I laced up my hiking boots,
                            packed my essentials, and set off to the trailhead.
                            The air was crisp, and the sun was just beginning
                            to peek over the horizon, casting a golden glow on
                            the world. With a sense of excitement and anticipation,
                            I started my journey into the wilderness.</p>

                        <h3 className="margarine-regular">The Trail: A Path to Discovery</h3>
                        <p className="margarine-regular-blog-paragraph">The trail was a well-marked path that meandered through dense woods and
                            open meadows. Birds were chirping melodiously, and the rustling of leaves
                            underfoot provided a rhythmic accompaniment to my steps. Along the way,
                            I encountered various flora and fauna, each adding to the tapestry of
                            the natural world around me.</p>

                        <p className="margarine-regular-blog-paragraph">One of the highlights was a beautiful stream that crossed the trail.
                            The sound of water flowing over rocks was incredibly calming.
                            I took a moment to sit by the stream, dip my fingers into the cool water,
                            and simply enjoy the tranquility.</p>

                        <h3 className="margarine-regular">The Ascent: Climbing to New Heights</h3>
                        <p className="margarine-regular-blog-paragraph">As I continued, the trail began to climb. The ascent was challenging
                            but rewarding. The higher I went, the more expansive the views became.
                            At one point, I reached a lookout point that offered a panoramic view
                            of the valley below. The sight was nothing short of spectacular – a
                            sea of green trees, dotted with the vibrant colors of wildflowers,
                            stretching out as far as the eye could see.</p>

                        <h3 className="margarine-regular">The Summit: A Moment of Triumph</h3>
                        <p className="margarine-regular-blog-paragraph">After a few more hours of hiking, I reached the summit.
                            Standing at the top, with the world spread out below me,
                            I felt a profound sense of accomplishment. The view was a
                            360-degree panorama of mountains, valleys, and distant horizons.
                            It was a reminder of the vastness and beauty of the natural world,
                            and my small but significant place within it.</p>

                        <h3 className="margarine-regular">The Descent: Reflecting on the Journey</h3>
                        <p className="margarine-regular-blog-paragraph">The descent was much quicker, but I took my time to savor the last moments
                            of my hike. I reflected on the journey – the challenges overcome,
                            the beauty witnessed, and the peace found. Hiking had provided not
                            just a physical workout but a mental and spiritual refreshment.</p>

                        <h3 className="margarine-regular">Conclusion: The Call of Nature</h3>
                        <p className="margarine-regular-blog-paragraph">This hike was a reminder of the importance of reconnecting
                            with nature. In our fast-paced, technology-driven world,
                            it's easy to forget the simple joys of walking through
                            a forest, listening to the sounds of wildlife, and
                            breathing in the fresh air.</p>

                        <p className="margarine-regular-blog-paragraph">If you ever feel overwhelmed or in need of a reset,
                            I highly recommend finding a trail and taking a hike.
                            Whether it's a short stroll or a challenging climb,
                            the experience is bound to be rewarding.</p>

                        <p className="margarine-regular-blog-paragraph">Happy Hiking!</p>
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
                                <img src={keyboard}/>
                            </div>
                        </div>
                        </div>
                        {/* ....................Ads.............. */}
                        <div className="col-3">
                            <img src={ad1} className="py-2" />
                            <img src={ad2} className="py-2" />
                            <img src={ad3} className="py-2" />
                            <img src={ad4} className="py-2" />
                            <img src={ad5} className="py-2" />
                            <img src={ad6} className="py-2" />
                        </div>
                    </div>
                </div >
            </div >
            )
}

            export default BlogDetail;