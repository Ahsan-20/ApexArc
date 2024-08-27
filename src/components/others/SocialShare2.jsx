import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SocialShare2 = () => {
    return (
        <>
            <li><Link to="https://www.facebook.com/profile.php?id=61562450429613 " target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="https://x.com/ApexArcSol" target='_blank' ><i className="fab fa-twitter"></i></Link></li>
            {/* <li><Link to="https://www.pinterest.com" target='_blank' ><i className="fab fa-pinterest"></i></Link></li> */}
            <li><Link to="https://www.linkedin.com/in/apexarc-sol-09a474319 " target='_blank' ><i className="fab fa-linkedin-in"></i></Link></li>
        </>
    );
};

export default SocialShare2;