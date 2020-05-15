import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';


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
                    <p>X</p>
                )}
            </div>
        </div>
    )
} export default NavBar;