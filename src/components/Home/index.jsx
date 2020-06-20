import React, { Fragment } from 'react';
import LandingBlock from './components/LandingBlock';
import Introduction from './components/Introduction';
import { Helmet } from 'react-helmet';


function Home() {
    return (
        <Fragment>
            <Helmet>
                <title>KKK | Home</title>
            </Helmet>
            <LandingBlock />
            <Introduction />
        </Fragment>
    )
} export default Home;