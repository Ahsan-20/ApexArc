import React from "react";
import AchievementV1Data from "../../jsonData/AchievementV1Data.json";
import SingleAchievementV1 from "./SingleAchievement";

const WhyChooseUsV1 = ({ chooseClass }) => {
  return (
    <>
      <div
        className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5">
              <div
                className="achivement-counter"
                style={{ backgroundImage: "url(img/shape/banner-4.png)" }}
              >
                <div className="shape-animated-left-bottom">
                  <img src="img/shape/11.png" alt="shape" />
                </div>
                <ul>
                  {AchievementV1Data.map((achievement) => (
                    <SingleAchievementV1
                      achievement={achievement}
                      key={achievement.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 mt-md-50 mt-xs-40">
              <div className="choose-us-card">
                <div className="services-section">
                  <h4 className="sub-title">Why Choose Us</h4>
                  <h2 className="title">
                    Empower Your Projects with Our Expert Services
                  </h2>
                  <p>
                  Unlock your ideas with our development services. From web and mobile apps to chatbots and generative AI, we provide the tools for success.
                  </p>
                  <ul className="list-check">
                    <li>Comprehensive Web and App Development</li>
                    <li>Interactive Chatbot Design and Integration</li>
                    <li>
                      Innovative UI/UX Solutions for a Seamless Experience
                    </li>
                    <li>
                      Generative AI for Creative and Practical Applications
                    </li>
                    <li>
                      Real-time Data Solutions for Informed Decision Making
                    </li>
                    <li>Market Development Strategies to Grow Your Business</li>
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

export default WhyChooseUsV1;
