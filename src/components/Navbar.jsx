import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize, useLockBodyScroll } from 'react-use';
import { ReactComponent as MenuIcon } from '../static/svg/menu.svg';
// import Icon from './common/Icon';


const navLinkProps = (path, animationDelay) => ({
    className: `fadeInUp ${window.location.pathname === path ? 'focused' : ''}`,
    style: {
        animationDelay: `${animationDelay}s`
    },
});

function NavBar({ pages }) {
    const { width } = useWindowSize();
    const [expand, setExpand] = useState(false);
    console.log(";;;; window sizw", width, expand)
    useLockBodyScroll(expand);

    return (
        <div className="Navbar">
            <div className="brand">
                <h1>KKK</h1>
            </div>
            <div className={`nav ${expand && 'expand-bg'}`} >
                {width > 769 && (
                    pages.map((page, index) => (
                        <Link to={page.pageLink} key={index}>{page.displayName}</Link>
                    ))
                )}
                {width < 769 && (
                    <MenuIcon onClick={() => setExpand(!expand)} />
                )}
            </div>
            {expand && <NavbarExtended pages={pages} expand={expand} setExpand={setExpand} />}
        </div>
    )
}

function NavbarExtended({ pages, expand, setExpand }) {
    console.log(pages, expand)
    return (
        <div className="expand">
            {pages.map((page, i) => {
                return (
                    <Link
                        to={page.pageLink}
                        key={i}
                        onClick={() => setExpand(false)}
                    >
                        <span
                            {...navLinkProps(page.pageLink, page.animationDelayForNavbar)}
                        >
                            {page.displayName}
                        </span>
                    </Link>
                )
            })}
        </div>
    )
}
export default NavBar;