import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize, useLockBodyScroll } from 'react-use';
import { ReactComponent as MenuIcon } from '../static/svg/menu.svg';


const navLinkProps = (path, animationDelay) => ({
    className: `fadeInUp ${window.location.pathname === path ? 'focused' : ''}`,
    style: {
        animationDelay: `${animationDelay}s`
    },
});

function NavBar({ pages }) {
    const WindowSize = useWindowSize();
    const [expand, setExpand] = useState(false);
    useLockBodyScroll(expand);
    WindowSize.width > 769 && expand && setExpand(false)

    return (
        <div className="Navbar">
            <div className="brand">
                <h1>KKK</h1>
            </div>
            <div className={`nav ${expand && 'expand-bg'}`} >
                {WindowSize.width > 769 && (
                    pages.map((page, index) => (
                        <Link to={page.pageLink} key={index}>{page.displayName}</Link>
                    ))
                )}
                {WindowSize.width < 769 && (
                    <MenuIcon onClick={() => setExpand(!expand)} />
                )}
            </div>
            {expand && <NavbarExtended pages={pages} expand={expand} setExpand={setExpand} />}
        </div>
    )
}

function NavbarExtended({ pages, expand, setExpand }) {
    
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