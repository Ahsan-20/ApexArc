import React from 'react';

const SingleProjectV2 = ({ gallery }) => {
    const { thumb, title, list1, list2 } = gallery;

    return (
        <>
            <div className="gallery-item">
                <div className="gallery-style-two">
                    <div className="thumb">
                        <img src={`/img/portfolio/${thumb}`} alt="thumb" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h4>{title}</h4>
                            <ul className="gallery-list">
                                <li>{list1}</li>
                                <li>{list2}</li>
                            </ul>
                        </div>
                        {/* Removed button/link functionality */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV2;
