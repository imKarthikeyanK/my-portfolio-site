import React, { useState } from 'react';
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
    // state hook to control menu icon toggle
    const [expand, setExpand] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(true);
    // lock body scroll on mobile view
    useLockBodyScroll(expand);
    // setExpand initialization
    WindowSize.width > 769 && expand && setExpand(false)

    return (
        <div className="Navbar">
            <div className="brand">
                <div className="brand-nav">
                    <Link to={'/'} className="ahover"><h1>KKK</h1></Link>
                </div>
            </div>
            <div className={`nav ${expand && 'expand-bg'}`} >
                {WindowSize.width > 769 && (
                    pages.map((page, index) => (
                        <Link
                            to={page.pageLink}
                            key={index}
                            className={`ahover ${window.location.pathname === page.pageLink ? 'active-menu' : ' '}`}
                        >{page.displayName}</Link>
                    ))
                )}
                {WindowSize.width < 769 && (
                    <MenuIcon onClick={() => setExpand(!expand)} />
                )}
            </div>
            {/* {isDarkMode ?
                <p className="dark-mode-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>☀</p>
                :
                <p className="dark-mode-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>☾</p>
            } */}
            {expand && <NavbarExtended pages={pages} expand={expand} setExpand={setExpand} />}
        </div>
    )
}

// component to expand menu items on mobile view
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