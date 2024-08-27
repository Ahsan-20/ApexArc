import React from 'react';
import ServiceListWidget from '../widgets/ServiceListWidget';
import SupportWidget from '../widgets/SupportWidget';
import BoucherWidget from '../widgets/BoucherWidget';
import FeatureListData from '../../jsonData/FeatureListData.json';
import PopularServiceData from '../../jsonData/PopularServiceData.json';
import SinglePopularService from './SinglePopularService';
import ServiceFaqV1 from '../faq/ServiceFaqV1';

const ServicesDetailsContent = ({ serviceInfo }) => {
    const { thumb, text, title } = serviceInfo;

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 pr-45 pr-md-15 pr-xs-15 services-single-content">
                                <div className="service-single-thumb">
                                    <img src={`/img/services/${thumb}`} alt="Thumb" />
                                </div>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Included Services</h3>
                                                <ul className="feature-list-item">
                                                    {FeatureListData.map(list =>
                                                        <li key={list.id}>{list.featureList}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challenge</h3>
                                                <p>
                                                    Delivering customized development solutions that cater to your specific business needs. Whether it's web/mobile app development, AI-driven solutions, chatbot integration, or generative AI, we ensure top-notch service tailored to your unique requirements. Our team tackles complex technical challenges while maintaining the highest standards of quality and efficiency.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3>What we do?</h3>
                                <p>
                                    At APEXARC, we provide a wide range of custom development services, including web and mobile app development, AI solutions, chatbot development, and more. Our approach is to deeply understand your business needs and deliver solutions that are innovative, scalable, and aligned with your goals. We combine cutting-edge technology with expert consultation to ensure that every project we undertake not only meets but exceeds expectations.
                                </p>

                                <div className="faq-style-one service-faq mt-40">
                                    <h2 className="mb-30">Questions about Our Services</h2>
                                    <ServiceFaqV1 />
                                </div>
                                <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        {PopularServiceData.map(popular =>
                                            <SinglePopularService popular={popular} key={popular.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 mt-md-50 mt-xs-50 pl-30 pl-md-15 pl-xs-15 services-sidebar">
                                <ServiceListWidget />
                                <SupportWidget />
                                {/* <BoucherWidget /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesDetailsContent;
