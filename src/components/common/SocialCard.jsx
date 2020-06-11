import React, { Fragment } from 'react';


function SocialCard({ social }) {
    return (
        <Fragment>
            <div className="social-card-container">
                <div className="social-card">
                    <div className="image">
                        <img src={social.image} alt="social" />
                    </div>
                    <div className="cover-text">
                        <p>{social.coverText}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} export default SocialCard;