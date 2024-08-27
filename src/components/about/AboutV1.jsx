import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const AboutV1 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="about-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div
                className="about-style-one bg-dark text-light"
                style={{ backgroundImage: "url(img/shape/7.png)" }}
              >
                <ul className="check-list-item">
                  <li>
                    <h5>Web & App Development</h5>
                    <p>
                      We create cutting-edge websites and custom apps tailored
                      to your needs. Our solutions ensure both visual appeal and
                      high functionality.
                    </p>
                  </li>
                  <li>
                    <h5>UI/UX Design, Chatbots & AI</h5>
                    <p>
                      Our focus is on exceptional UI/UX design, intelligent
                      chatbots, and leveraging AI for innovation. We enhance
                      user experiences and automate interactions.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="about-style-one">
                <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">
                Provides <strong>web</strong> and <strong>app</strong> solutions<br />with expert <strong>UI/UX</strong>, <strong>chatbots</strong>, and <strong>AI</strong>

                </h2>
                <div
                  className="thumb bg-cover"
                  style={{ backgroundImage: "url(img/banner/abst.jpg)" }}
                >
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="mgAp2cgypoI"
                    onClose={() => setOpen(false)}
                  />
                  <Link
                    className="mfp-iframe popup-youtube video-play-button with-text mt-20"
                    onClick={() => setOpen(true)}
                  >
                    <div className="effect"></div>
                    <span>
                      <i className="fa-solid fa-play"></i> OUR PROJECT
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV1;
