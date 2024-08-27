import React from 'react';
import SocialShare2 from '../others/SocialShare2';
import { HashLink as Link } from 'react-router-hash-link'
import { toast } from 'react-toastify';

const HeaderSidebarMenu = ({ isSidebarOpen, removeClasses, addClasses, searchOpen }) => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Email")
    }

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="search"><Link to={void (0)} onClick={searchOpen}><i className="fa-solid fa-search"></i></Link></li>
                        <li className="side-menu">
                            <Link to={void (0)} onClick={addClasses}>
                                <span className="bar-1"></span>
                                <span className="bar-2"></span>
                                <span className="bar-3"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`side ${isSidebarOpen ? "on" : ""}`}>
                    <Link to={void (0)} className="close-side" onClick={removeClasses}><i className="icon_close"></i></Link>
                    <div className="widget">
                        <div className="logo">
                            <img src="/img/logo/logo-bold.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="widget">
                        <p>
                        APEXARC offers cutting-edge services in web and app development, AI solutions, UI/UX design, generative AI, and chatbot development. We craft innovative, customized solutions to meet your unique needs.</p>
                    </div>
                    <div className="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <p>Address</p>
                                        <strong>Islamabad, Pakistan</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Email</p>
                                        <strong><a href="apexarcsolutions@gmail.com" className='color-para'>apexarcsolutions@gmail.com</a></strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Contact</p>
                                        <strong><a href="tel:+923058594110" className='color-para'>+923058594110</a></strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter">
                        <h4 className="title">Get Subscribed!</h4>
                        <form onSubmit={handleEmail}>
                            <div className="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" autoComplete='off' required />
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <i className="arrow_right"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="widget social">
                        <ul className="link">
                            <SocialShare2 />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebarMenu;
