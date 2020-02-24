import React from 'react';
import img1 from "../../../resources/images/news1.jpg";
import img2 from "../../../resources/images/news2.jpg";
import img3 from "../../../resources/images/news3.jpg";
import { Link } from "react-router-dom"
const News = () => {
  return (
    <section class="news">
        <div class="container">
            <div class="section-title">
                <h2>Latest <span>News</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis</p>
            </div>
            <div class="news-outer">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="news-item">
                            <div class="news-image">
                                <img src={img1} alt="imae"/>
                            </div>
                            <div class="news-content">
                                <p class="date mar-bottom-5">16 DECEMBER 2019</p>
                                <h4><a href="single-right.html">Why choose Hotux Hotel to travel this summer</a></h4>
                                <div class="room-services mar-bottom-10">
                                    <ul>
                                        <li><a href="single-right.html"><i class="fa fa-user" aria-hidden="true"></i> By Jack Daniels</a></li>
                                        <li><a href="single-right.html"><i class="fa fa-comment" aria-hidden="true"></i> 3 comments</a></li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <a href="single-left.html">READ MORE <i class="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="news-item">
                            <div class="news-image">
                                <img src={img2} alt="iage"/>
                            </div>
                            <div class="news-content">
                                <p class="date mar-bottom-5">16 DECEMBER 2019</p>
                                <h4><a href="single-right.html">Why choose Hotux Hotel to travel this summer</a></h4>
                                <div class="room-services mar-bottom-10">
                                    <ul>
                                        <li><a href="single-right.html"><i class="fa fa-user" aria-hidden="true"></i> By Jack Daniels</a></li>
                                        <li><a href="single-right.html"><i class="fa fa-comment" aria-hidden="true"></i> 3 comments</a></li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <a href="single-left.html">READ MORE <i class="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <div class="news-item">
                            <div class="news-image">
                                <img src={img3} alt="imae"/>
                            </div>
                            <div class="news-content">
                                <p class="date mar-bottom-5">16 DECEMBER 2019</p>
                                <h4><a href="single-right.html">Why choose Hotux Hotel to travel this summer</a></h4>
                                <div class="room-services mar-bottom-10">
                                    <ul>
                                        <li><a href="single-right.html"><i class="fa fa-user" aria-hidden="true"></i> By Jack Daniels</a></li>
                                        <li><a href="single-right.html"><i class="fa fa-comment" aria-hidden="true"></i> 3 comments</a></li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <a href="single-left.html">READ MORE <i class="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-btn">
                <Link to="/" class="btn btn-black mar-right-10">EXPLORE ALL <i class="fas fa-angle-double-right"></i></Link>
            </div>
        </div>
    </section>
  );
};

export default News;