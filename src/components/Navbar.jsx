import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { ReactComponent as MenuIcon } from '../static/svg/menu.svg';
// import Icon from './common/Icon';


function NavBar({ pages }) {
    const { width } = useWindowSize()
    console.log(";;;; window sizw", width)
    return (
        <div className="Navbar">
            <div className="brand">
                <h1>KKK</h1>
            </div>
            <div className="nav">
                {width >= 768 && (
                    pages.map((page, index) => (
                        <Link to={page.pageLink} key={index}>{page.displayName}</Link>
                    ))
                )}
                {width < 768 && (
                    <MenuIcon />
                )}
            </div>
        </div>
    )
} export default NavBar;