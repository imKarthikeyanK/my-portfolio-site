import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize, useAsync } from 'react-use';
import { ReactComponent as MenuIcon } from '../static/svg/menu.svg';
// import Icon from './common/Icon';


function NavBar({ pages }) {
    const { width } = useWindowSize();
    const [expand, setExpand] = useState(false);
    console.log(";;;; window sizw", width, expand)
    return (
        <div className="Navbar">
            <div className="brand">
                <h1>KKK</h1>
            </div>
            <div className={`nav ${expand && 'expand-bg'}`}>
                {width >= 768 && (
                    pages.map((page, index) => (
                        <Link to={page.pageLink} key={index}>{page.displayName}</Link>
                    ))
                )}
                {width < 768 && (
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
                        onClick={()=>setExpand(false)}
                    >
                        {page.displayName}
                    </Link>
                )
            })}
        </div>
    )
}
export default NavBar;