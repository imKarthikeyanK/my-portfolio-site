import React, { Fragment } from 'react';
import SocialCard from './common/SocialCard';
import linkedIn from '../static/svg/linkedin.svg';
import mail from '../static/svg/mail.svg';
import twitter from '../static/svg/twitter.svg';
import instagram from '../static/svg/insta.svg';


function SocialMedia() {
    console.log(linkedIn)
    const social = [
        {
            "imageUrl": linkedIn,
            "SocialUrl": "https://www.linkedin.com/in/imkarthikeyank",
            "displayUrl": "linkedin.com/in/imkarthikeyank",
            "coverText": "LinkedIn",
            "colorClass": "bg-linkedin"
        },
        {
            "imageUrl": mail,
            "SocialUrl": "superkarthi789@gmail.com",
            "displayUrl": "superkarthi789@gmail.com",
            "coverText": "Gmail",
            "colorClass": "bg-mail"
        },
        {
            "imageUrl": twitter,
            "SocialUrl": "https://www.twitter.com/imkarthikeyank",
            "displayUrl": "twitter.com/imkarthikeyank",
            "coverText": "Twitter",
            "colorClass": "bg-twitter"
        },
        {
            "imageUrl": instagram,
            "SocialUrl": "https://www.instagram.com/karthikeyank_",
            "displayUrl": "instagram.com/karthikeyank_",
            "coverText": "Instagram",
            "colorClass": "bg-insta"
        },
        {
            "imageUrl": instagram,
            "SocialUrl": "https://www.instagram.com/beingzeros",
            "displayUrl": "instagram.com/beingzeros",
            "coverText": "Instagram",
            "colorClass": "bg-insta"
        },
        {
            "imageUrl": instagram,
            "SocialUrl": "https://www.instagram.com/initial_touch",
            "displayUrl": "instagram.com/initial_touch",
            "coverText": "Instagram",
            "colorClass": "bg-insta"
        }
    ]

    return (
        <Fragment>
            <div className="connect">
                {social.map((socialItem, index) => (
                    <SocialCard key={index} social={socialItem} />
                ))}
            </div>
        </Fragment>
    )
} export default SocialMedia;