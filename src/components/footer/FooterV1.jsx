import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialShare from '../others/SocialShare';
import { toast } from 'react-toastify';

const FooterV1 = () => {

    const handleSearch = (event) => {
        event.preventDefault();
        event.target.reset();
        toast.success("Thank you for subscribing!");
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: "url(/img/shape/5.png)" }}>
                <div className="container">
                    <div className="f-items default-padding-bottom pt-70 pt-xs-0">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="footer-animated-shape">
                                    <img src="/img/shape/6.png" alt="Image Not Found" />
                                </div>
                                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                                    <img className="logo" src="/img/logo/logo-bold.png" alt="Logo" />
                                    <p>
                                        At APEXARC, we innovate and transform ideas into reality. From web and app development to AI and UI/UX design, we’re here to help you achieve success.
                                    </p>
                                    <div className="footer-social mt-30">
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                <div className="f-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        <li>
                                            <Link to="/about-us#">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us#">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us#">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <strong>Address:</strong>
                                                Islamabad, Pakistan
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:apexarcsolutions@gmail.com">apexarcsolutions@gmail.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="#">Coming Soon</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item newsletter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <p>
                                        Subscribe to our newsletter for the latest updates and exclusive offers.
                                    </p>
                                    <form onSubmit={handleSearch}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' required />
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-dark text-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} APEXARC. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
