import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const AboutV2 = () => {
  return (
    <>
      <div className="about-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <img src="/img/thumb/4.jpg" alt="Image Not Found" />
                <div className="experience">
                  <h2>
                    <strong>18</strong> Years Experience
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
              <div className="about-two-info">
                <h4 className="sub-title">About our compnay</h4>
                <h2 className="title">
                  Providing the Best Solutions <br /> in Digital Innovation
                </h2>
                <p>
                Transform your business with our expert web and app development, chatbot creation, generative AI, and UI/UX design services. We tailor solutions to your needs, ensuring exceptional functionality and user experience. Let us lead your digital innovation.
                </p>

                <div className="about-grid-info">
                  <Link className="btn-round-animation" to="/services#">
                    Discover More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <ul className="list-info-item">
                    <li>
                      <h4>
                        <Link to="#">
                          Design <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link to="#">
                          Digital Solution{" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link to="#">
                          Strategy <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link to="#">
                          Branding <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
