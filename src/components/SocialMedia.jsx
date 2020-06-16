import React, { Fragment } from 'react';
import SocialCard from './common/SocialCard';
import linkedIn from '../static/svg/linkedin.svg';
import facebook from '../static/svg/facebook.svg';
import twitter from '../static/svg/twitter.svg';
import instagram from '../static/svg/insta.svg';
import GitHub from '../static/images/GitHub-Mark-64px.png';


function SocialMedia() {
    console.log(linkedIn)
    const social = [
        {
            "imageUrl": linkedIn,
            "SocialUrl": "https://www.linkedin.com/in/imkarthikeyank",
            "displayUrl": "linkedin.com/in/imkarthikeyank",
            "coverText": "LinkedIn",
            "colorClass": "bg-linkedin",
            "hoverClass": "hover-linkedin"
        },
        {
            "imageUrl": GitHub,
            "SocialUrl": "https://github.com/imKKK",
            "displayUrl": "github.com/imKKK",
            "coverText": "GitHub",
            "colorClass": "bg-github",
            "hoverClass": "hover-github"
        },
        {
            "imageUrl": twitter,
            "SocialUrl": "https://www.twitter.com/imkarthikeyank",
            "displayUrl": "twitter.com/imkarthikeyank",
            "coverText": "Twitter",
            "colorClass": "bg-twitter",
            "hoverClass": "hover-twitter"
        },
        {
            "imageUrl": facebook,
            "SocialUrl": "https://www.facebook.com/imkarthikeyank/",
            "displayUrl": "facebook.com/imkarthikeyank",
            "coverText": "Facebook",
            "colorClass": "bg-facebook",
            "hoverClass": "hover-fb"
        },
        {
            "imageUrl": instagram,
            "SocialUrl": "https://www.instagram.com/karthikeyank_",
            "displayUrl": "instagram.com/karthikeyank_",
            "coverText": "Instagram",
            "colorClass": "bg-insta",
            "hoverClass": "hover-insta"
        },
        {
            "imageUrl": instagram,
            "SocialUrl": "https://www.instagram.com/beingzeros",
            "displayUrl": "instagram.com/beingzeros",
            "coverText": "Instagram",
            "colorClass": "bg-insta",
            "hoverClass": "hover-insta"
        },
        {
            "imageUrl": instagram,
            "SocialUrl": "https://www.instagram.com/initial_touch",
            "displayUrl": "instagram.com/initial_touch",
            "coverText": "Instagram",
            "colorClass": "bg-insta",
            "hoverClass": "hover-insta"
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