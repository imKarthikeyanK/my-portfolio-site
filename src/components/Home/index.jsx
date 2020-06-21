import React, { Fragment, useEffect } from 'react';
import LandingBlock from './components/LandingBlock';
import Introduction from './components/Introduction';
import { Helmet } from 'react-helmet';


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Fragment>
            <Helmet>
                <title>Karthikeyan K - Full Stack Developer</title>
            </Helmet>
            <LandingBlock />
            <Introduction />
        </Fragment>
    )
} export default Home;