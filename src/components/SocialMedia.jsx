import React, { Fragment, useEffect } from 'react';
import SocialCard from './common/SocialCard';
import { Helmet } from 'react-helmet';

// social media accounts data
const social = [
    {
        "imageUrl": "https://kportfolio-files.s3.ap-south-1.amazonaws.com/linkedin.svg",
        "SocialUrl": "https://www.linkedin.com/in/imkarthikeyank",
        "displayUrl": "linkedin.com/in/imkarthikeyank",
        "coverText": "LinkedIn",
        "colorClass": "bg-linkedin",
        "hoverClass": "hover-linkedin"
    },
    {
        "imageUrl": "https://kportfolio-files.s3.ap-south-1.amazonaws.com/GitHub-Mark-64px.png",
        "SocialUrl": "https://github.com/imKarthikeyanK",
        "displayUrl": "github.com/imKarthikeyanK",
        "coverText": "GitHub",
        "colorClass": "bg-github",
        "hoverClass": "hover-github"
    },
    {
        "imageUrl": "https://kportfolio-files.s3.ap-south-1.amazonaws.com/twitter.svg",
        "SocialUrl": "https://www.twitter.com/imkarthikeyank",
        "displayUrl": "twitter.com/imkarthikeyank",
        "coverText": "Twitter",
        "colorClass": "bg-twitter",
        "hoverClass": "hover-twitter"
    },
    {
        "imageUrl": "https://kportfolio-files.s3.ap-south-1.amazonaws.com/facebook.svg",
        "SocialUrl": "https://www.facebook.com/imkarthikeyank/",
        "displayUrl": "facebook.com/imkarthikeyank",
        "coverText": "Facebook",
        "colorClass": "bg-facebook",
        "hoverClass": "hover-fb"
    },
    {
        "imageUrl": "https://kportfolio-files.s3.ap-south-1.amazonaws.com/insta.svg",
        "SocialUrl": "https://www.instagram.com/karthikeyank_",
        "displayUrl": "instagram.com/karthikeyank_",
        "coverText": "Instagram",
        "colorClass": "bg-insta",
        "hoverClass": "hover-insta"
    },
    {
        "imageUrl": "https://kportfolio-files.s3.ap-south-1.amazonaws.com/insta.svg",
        "SocialUrl": "https://www.instagram.com/beingzeros",
        "displayUrl": "instagram.com/beingzeros",
        "coverText": "Instagram",
        "colorClass": "bg-insta",
        "hoverClass": "hover-insta"
    },
    {
        "imageUrl": "https://kportfolio-files.s3.ap-south-1.amazonaws.com/insta.svg",
        "SocialUrl": "https://www.instagram.com/initial_touch",
        "displayUrl": "instagram.com/initial_touch",
        "coverText": "Instagram",
        "colorClass": "bg-insta",
        "hoverClass": "hover-insta"
    }
]

function SocialMedia() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    return (
        <Fragment>
            <Helmet>
                <title>KKK | Connect</title>
            </Helmet>
            <div className="div-title">
                <h1>FIND ME HERE</h1>
            </div>
            <div className="connect">
                {social.map((socialItem, index) => (
                    <SocialCard key={index} social={socialItem} />
                ))}
            </div>
        </Fragment>
    )
} export default SocialMedia;