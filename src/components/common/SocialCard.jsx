import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function SocialCard({ social }) {
    return (
        <Fragment>
            <div className="social-card-container">
                <a href={social.SocialUrl} rel="noopener noreferrer" target="_blank">
                    <div className="social-card">
                        <div className={`image ${social.colorClass}`}>
                            <img src={social.imageUrl} alt="social" />
                        </div>
                        <div className="cover-text">
                            <p>{social.displayUrl}</p>
                        </div>
                    </div>
                </a>
            </div>
        </Fragment>
    )
} export default SocialCard;