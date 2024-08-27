import React from 'react';
import AboutV3ListData from '../../jsonData/AboutV3ListData.json'
import CountUp from 'react-countup';

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-three">
                            <div className="about-three-thumb">
                                <img src="/img/thumb/6.jpg" alt="Image Not Found" />
                                <img src="/img/thumb/5.jpg" alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong><CountUp end={18} duration={3} enableScrollSpy /></strong> Years of Expertise</h2>
                                </div>
                                <div className="animated-shape">
                                    <img src="/img/shape/38.png" alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-style-three">
                            <div className="about-three-info">
                                <h4 className="sub-title">Consultation Services</h4>
                                <h2 className="title">Collaborating with you <br /> to achieve success</h2>
                                <p>
                                    We specialize in providing tailored consultation services that align with your unique needs. Our team is dedicated to guiding you through every step of the process, ensuring that you receive the expertise required to excel in your endeavors. Let's work together to turn your goals into reality.
                                </p>
                                <ul className="list-grid-four">
                                    {AboutV3ListData.map(about =>
                                        <li key={about.id}>{about.item}</li>
                                    )}
                                </ul>
                                {/* <div className="about-author">
                                    <div className="thumb">
                                        <img src="/img/team/9.jpg" alt="Image Not Found" />
                                    </div>
                                    <div className="info">
                                        <h4>James Baker</h4>
                                        <span>CEO & Founder</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;
