import React, { Fragment, useEffect } from 'react';
import Card from './common/cards';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import python from '../static/images/python.png';
// import react from '../static/images/react.png';
// import mysql from '../static/images/mysql.png';
// import sqlserver from '../static/images/sqlserver1.png';
// import html from '../static/images/html.png';
// import css from '../static/images/css.png';
// import javascript from '../static/images/javascript.png';
// import flask from '../static/images/flask.png';
// import django from '../static/images/django.png';
// import jquery from '../static/images/jquery.png';
// import mongodb from '../static/images/mongodb.png';
// import sass from '../static/images/sass.png';
// import cpro from '../static/images/cpro.png';
// import cplus from '../static/images/cplus.png';
// import java from '../static/images/java.png';
// import bootstrap from '../static/images/bootstrap.png';
// import git from '../static/images/git.png';
// import aws from '../static/images/aws.png';
// import msof from '../static/images/msof.png';
// import ps from '../static/images/ps.png';

// skills data
const skills = [
    {
        skill: "Python",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/python.png",
        description: ""
    },
    {
        skill: "react",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/react.png",
        description: ""
    },
    {
        skill: "mysql",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/mysql.png",
        description: ""
    },
    {
        skill: "sqlserver",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/sqlserver1.png",
        description: ""
    },
    {
        skill: "mongodb",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/mongodb.png",
        description: ""
    },
    {
        skill: "html",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/html.png",
        description: ""
    },
    {
        skill: "css",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/css.png",
        description: ""
    },
    {
        skill: "javascript",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/javascript.png",
        description: ""
    },
    {
        skill: "flask",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/flask.png",
        description: ""
    },
    {
        skill: "django",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/django.png",
        description: ""
    },
    {
        skill: "bootstrap",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/bootstrap.png",
        description: ""
    },
    {
        skill: "sass",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/sass.png",
        description: ""
    },
    {
        skill: "jquery",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/jquery.png",
        description: ""
    },
    {
        skill: "git",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/git.png",
        description: ""
    },
    {
        skill: "aws",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/aws.png",
        description: ""
    },
    {
        skill: "cpro",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/cpro.png",
        description: ""
    },
    {
        skill: "cplus",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/cplus.png",
        description: ""
    },
    {
        skill: "java",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/java.png",
        description: ""
    },
    {
        skill: "msof",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/msof.png",
        description: ""
    },
    {
        skill: "ps",
        image: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/ps.png",
        description: ""
    }
]

function TechStack() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    return (
        <Fragment>
            <Helmet>
                <title>KKK | Tech Stacks</title>
            </Helmet>
            <div className="div-title">
                <h1>THE STACKS AM WORKING WITH</h1>
            </div>
            <div className="skillsCard">
                {
                    skills.map((skill, index) => (
                        <Card key={index} skills={skill} />
                    ))
                }
            </div>
            <div className="skills-btn">
                <Link to={'/works'}>
                    <button type="button">WORKS</button>
                </Link>
            </div>
        </Fragment>
    )
} export default TechStack;