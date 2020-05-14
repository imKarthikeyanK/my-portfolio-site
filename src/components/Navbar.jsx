import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function NavBar({ pages }) {
    return (
        <div className="Navbar">
            <div className="brand">
                <h1>KKK</h1>
            </div>
            <div className="nav">
                {pages.map((page, index) => (
                    <Link to={page.pageLink} key={index}>{page.displayName}</Link>
                ))}
            </div>
        </div>
    )
} export default NavBar;