import React from 'react';
import img1 from "../../../resources/images/news1.jpg";
import img2 from "../../../resources/images/news2.jpg";
import img3 from "../../../resources/images/news3.jpg";
import { Link } from "react-router-dom"
const News = () => {
  return (
    <section className="news">
        <div className="container">
            <div className="section-title">
                <h2>Latest <span>News</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis</p>
            </div>
            <div className="news-outer">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="news-item">
                            <div className="news-image">
                                <img src={img1} alt="imae"/>
                            </div>
                            <div className="news-content">
                                <p className="date mar-bottom-5">16 DECEMBER 2019</p>
                                <h4><Link to="/news_detail">Why choose Hotux Hotel to travel this summer</Link></h4>
                                <div className="room-services mar-bottom-10">
                                    <ul>
                                        <li><Link to="/news_detail"><i className="fa fa-user" aria-hidden="true"></i> By Jack Daniels</Link></li>
                                        <li><Link to="/news_detail"><i className="fa fa-comment" aria-hidden="true"></i> 3 comments</Link></li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <Link to="/news_detail">READ MORE <i className="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="news-item">
                            <div className="news-image">
                                <img src={img2} alt="iage"/>
                            </div>
                            <div className="news-content">
                                <p className="date mar-bottom-5">16 DECEMBER 2019</p>
                                <h4><Link to="/news_detail">Why choose Hotux Hotel to travel this summer</Link></h4>
                                <div className="room-services mar-bottom-10">
                                    <ul>
                                        <li><Link to="/news_detail"><i className="fa fa-user" aria-hidden="true"></i> By Jack Daniels</Link></li>
                                        <li><Link to="/news_detail"><i className="fa fa-comment" aria-hidden="true"></i> 3 comments</Link></li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <Link to="/news_detail">READ MORE <i className="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="news-item">
                            <div className="news-image">
                                <img src={img3} alt="imae"/>
                            </div>
                            <div className="news-content">
                                <p className="date mar-bottom-5">16 DECEMBER 2019</p>
                                <h4><Link to="/news_detail">Why choose Hotux Hotel to travel this summer</Link></h4>
                                <div className="room-services mar-bottom-10">
                                    <ul>
                                        <li><Link to="/news_detail"><i className="fa fa-user" aria-hidden="true"></i> By Jack Daniels</Link></li>
                                        <li><Link to="/news_detail"><i className="fa fa-comment" aria-hidden="true"></i> 3 comments</Link></li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <Link to="/news_detail">READ MORE <i className="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-btn">
                <Link to="/" className="btn btn-black mar-right-10">EXPLORE ALL <i className="fas fa-angle-double-right"></i></Link>
            </div>
        </div>
    </section>
  );
};

export default News;