import React, { Fragment } from 'react';
import LandingBlock from './components/LandingBlock';
import Introduction from './components/Introduction';


function Home() {
    return (
        <Fragment>
            <LandingBlock />
            <Introduction />
        </Fragment>
    )
} export default Home;