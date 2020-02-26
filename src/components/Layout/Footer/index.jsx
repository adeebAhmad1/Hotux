import React from 'react';
import visa from "../../../resources/images/icons/visa.png"
import mastercard from "../../../resources/images/icons/mastercard.png"
import americanexpress from "../../../resources/images/icons/americanexpress.png"
import appstore from "../../../resources/images/icons/appstore.png"
import googleplay from "../../../resources/images/icons/googleplay.png"
import tripadvisor from "../../../resources/images/tripadvisor.png"
import logo from "../../../resources/images/logo.png"
const Footer = () => {
  return (
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="footer-logo text-center">
                    <img src={logo} alt="Hotux"/>
                </div>
                <div className="footer-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-about">
                                <h4>Company Info</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tellus vitae justo blandit ultrices.</p>
                            </div>
                            <div className="footer-payment">
                                <h4>We Accept</h4>
                                <ul>
                                    <li><img src={visa} alt="Hotux"/></li>
                                    <li><img src={mastercard} alt="Hotux"/></li>
                                    <li><img src={americanexpress} alt="Hotux"/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="quick-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Rooms</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="Rooms">
                                <h4>Rooms</h4>
                                <ul>
                                    <li><a href="#">Single Rooms</a></li>
                                    <li><a href="#">Double Rooms</a></li>
                                    <li><a href="#">Studio Rooms</a></li>
                                    <li><a href="#">Kingsize Rooms</a></li>
                                    <li><a href="#">Presidentsuite Rooms</a></li>
                                    <li><a href="#">Luxury Kings Rooms</a></li>
                                    <li><a href="#">Connecting Rooms</a></li>
                                    <li><a href="#">Murphy Rooms</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-contact">
                                <h4>Contact info</h4>
                                <ul>
                                    <li>Tel: 977-222-444-6666</li>
                                    <li>Email: info@hotux.com.np</li>
                                    <li>Fax: 977-222-444-666</li>
                                    <li>Address: 445 Mount Eden Road, Sundarbasti, Chakrapath</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="copyright-content">
                            <p>Copyright 2019. Made with <span>♥</span>. All Rights Reserved. <a href="#">Hotux</a></p>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="tripadvisor-logo text-center">
                            <img src={tripadvisor} alt="Hotux"/>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="copyright-links mar-bottom-20">
                            <ul>
                                <li><a href="#">Accomodations</a></li>
                                <li><a href="#">Book Now</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                            </ul>
                        </div>
                        <div className="playstore-links">
                            <img src={appstore} alt="Hotux" className="mar-right-10"/>
                            <img src={googleplay} alt="Hotux"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;