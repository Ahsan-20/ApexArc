import React from 'react';
import ReactWOW from 'react-wow';
import { HashLink as Link } from 'react-router-hash-link';
import CountUp from 'react-countup/';

const BannerV2 = () => {
    return (
        <>
            <div className="banner-style-two-area text-light bg-cover overflow-hidden" style={{ backgroundImage: "url(/img/banner/1.jpg)" }}>
                <div className="banner-shape-right-bottom">
                    <img src="/img/shape/4.png" alt="Image Not Found" />
                </div>
                <div className="banner-style-two">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-8">
                                    <ReactWOW animation='fadeInLeft' delay="500ms" duration="400ms">
                                        <h2><strong>At APEXARC, we deliver innovative solutions</strong></h2>
                                        <p>
                                            In web and app development, AI, UI/UX design, generative AI, and chatbots, we turn your ideas into reality with precision and creativity. Explore our services:
                                        </p>
                                    </ReactWOW>
                                </div>
                                <div className="col-xl-4">
                                    <div className="banner-right-info">
                                        <div className="banner-list">
                                            <div className="fun-fact">
                                                <div className="content">
                                                    <div className="counter">
                                                        <div className="timer">
                                                            <CountUp end={276} duration={3} enableScrollSpy />
                                                        </div>
                                                        <div className="operator">K</div>
                                                    </div>
                                                    <span className="medium">Completed Projects</span>
                                                </div>
                                            </div>
                                            <ReactWOW animation='fadeInUp' delay="500ms">
                                                <p>
                                                    From concept to execution, our expertise spans across a variety of services tailored to meet your business needs.
                                                </p>
                                            </ReactWOW>
                                            {/* <ReactWOW animation='fadeInUp' delay="900ms">
                                                <div className="button mt-30">
                                                    <Link className="btn-animation" to="/services#"><i className="fa-solid fa-arrow-right"></i> <span>Our Services</span></Link>
                                                </div>
                                            </ReactWOW> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV2;
