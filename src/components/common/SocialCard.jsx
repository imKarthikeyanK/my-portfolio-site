import React, { Fragment } from 'react';

function SocialCard({ social }) {
    return (
        <Fragment>
            <div className="social-card-container">
                <a href={social.SocialUrl} rel="noopener noreferrer" target="_blank">
                    <div className={`social-card ${social.hoverClass}`}>
                        <div className={`image ${social.colorClass}`}>
                            <img src={social.imageUrl} alt="social" />
                        </div>
                        <div className="cover-text insta">
                            <p>{social.displayUrl}</p>
                        </div>
                    </div>
                </a>
            </div>
        </Fragment>
    )
} export default SocialCard;