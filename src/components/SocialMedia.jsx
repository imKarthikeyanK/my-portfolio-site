import React, { Fragment } from 'react';
import SocialCard from './common/SocialCard';
import { social } from '../config.json';


function SocialMedia() {
    return (
        <Fragment>
            <div className="connect">
                {social.map((socialItem, index) => (
                    <SocialCard social={socialItem} />
                ))}
            </div>
        </Fragment>
    )
} export default SocialMedia;