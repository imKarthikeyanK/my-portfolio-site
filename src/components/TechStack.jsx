import React, { Fragment, useEffect } from 'react';
import Card from './common/cards';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import python from '../static/images/python.png';
import react from '../static/images/react.png';
import mysql from '../static/images/mysql.png';
import sqlserver from '../static/images/sqlserver1.png';
import html from '../static/images/html.png';
import css from '../static/images/css.png';
import javascript from '../static/images/javascript.png';
import flask from '../static/images/flask.png';
import django from '../static/images/django.png';
import jquery from '../static/images/jquery.png';
import mongodb from '../static/images/mongodb.png';
import sass from '../static/images/sass.png';
import cpro from '../static/images/cpro.png';
import cplus from '../static/images/cplus.png';
import java from '../static/images/java.png';
import bootstrap from '../static/images/bootstrap.png';
import git from '../static/images/git.png';
import aws from '../static/images/aws.png';
import msof from '../static/images/msof.png';
import ps from '../static/images/ps.png';

// skills data
const skills = [
    {
        skill: "Python",
        image: python,
        description: ""
    },
    {
        skill: "react",
        image: react,
        description: ""
    },
    {
        skill: "mysql",
        image: mysql,
        description: ""
    },
    {
        skill: "sqlserver",
        image: sqlserver,
        description: ""
    },
    {
        skill: "mongodb",
        image: mongodb,
        description: ""
    },
    {
        skill: "html",
        image: html,
        description: ""
    },
    {
        skill: "css",
        image: css,
        description: ""
    },
    {
        skill: "javascript",
        image: javascript,
        description: ""
    },
    {
        skill: "flask",
        image: flask,
        description: ""
    },
    {
        skill: "django",
        image: django,
        description: ""
    },
    {
        skill: "bootstrap",
        image: bootstrap,
        description: ""
    },
    {
        skill: "sass",
        image: sass,
        description: ""
    },
    {
        skill: "jquery",
        image: jquery,
        description: ""
    },
    {
        skill: "git",
        image: git,
        description: ""
    },
    {
        skill: "aws",
        image: aws,
        description: ""
    },
    {
        skill: "cpro",
        image: cpro,
        description: ""
    },
    {
        skill: "cplus",
        image: cplus,
        description: ""
    },
    {
        skill: "java",
        image: java,
        description: ""
    },
    {
        skill: "msof",
        image: msof,
        description: ""
    },
    {
        skill: "ps",
        image: ps,
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