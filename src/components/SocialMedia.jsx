import React, { Fragment } from 'react';
import SocialCard from './common/SocialCard';
import {linkedIn} from '../static/svg/linkedin.svg';


function SocialMedia() {

    const social = [
        {
            "imageUrl": linkedIn,
            "SocialUrl": "https://www.linkedin.com/in/imkarthikeyank/",
            "coverText": "LinkedIn"
        },
        {
            "imageUrl": "",
            "SocialUrl": "test",
            "coverText": "test"
        },
        {
            "imageUrl": "",
            "SocialUrl": "test",
            "coverText": "test"
        },
        {
            "imageUrl": "",
            "SocialUrl": "test",
            "coverText": "test"
        },
        {
            "imageUrl": "",
            "SocialUrl": "test",
            "coverText": "test"
        },
        {
            "imageUrl": "",
            "SocialUrl": "test",
            "coverText": "test"
        }
    ]

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