import React, { Fragment } from 'react';
import profileImage from '../../../static/images/karthikeyank.jpg';
import { Link } from 'react-router-dom';


function Introduction() {
    return (
        <Fragment>
            <div className="introduction">
                <div className="col">
                    <div className="profilePicture">
                        <img src={profileImage} alt="karthikeyank"></img>
                    </div>
                </div>
                <div className="col">
                    <p>aafsiouo ureutiuh oirutoer iodfhgdhf 8orutoeh fdihgkjdhf jdfhgkjdfhgd fdghdofihgdflkhg ldfigldifhrhr kfhdkghfdgjhdfg rueui oidfgod dlfghdflk lkorieeghlkdfhg  ihlhk ldfkghldfk ldfhgldh dflgh dfhgdlfhoidifrf ifufh rfhhd epe seoflk sdfioirnlkd aafsiouo ureutiuh oirutoer iodfhgdhf 8orutoeh fdihgkjdhf jdfhgkjdfhgd fdghdofihgdflkhg ldfigldifhrhr kfhdkghfdgjhdfg rueui oidfgod dlfghdflk lkorieeghlkdfhg  ihlhk ldfkghldfk ldfhgldh dflgh dfhgdlfhoidifrf ifufh rfhhd epe seoflk sdfioirnlkd</p>
                    <p>aafsiouo ureutiuh oirutoer iodfhgdhf 8orutoeh fdihgkjdhf jdfhgkjdfhgd fdghdofihgdflkhg ldfigldifhrhr kfhdkghfdgjhdfg rueui oidfgod dlfghdflk lkorieeghlkdfhg  ihlhk ldfkghldfk ldfhgldh dflgh dfhgdlfhoidifrf ifufh rfhhd epe seoflk sdfioirnlkd aafsiouo ureutiuh oirutoer iodfhgdhf 8orutoeh fdihgkjdhf jdfhgkjdfhgd fdghdofihgdflkhg ldfigldifhrhr kfhdkghfdgjhdfg rueui oidfgod dlfghdflk lkorieeghlkdfhg  ihlhk ldfkghldfk ldfhgldh dflgh dfhgdlfhoidifrf ifufh rfhhd epe seoflk sdfioirnlkd</p>
                    <p>aafsiouo ureutiuh oirutoer iodfhgdhf 8orutoeh fdihgkjdhf jdfhgkjdfhgd fdghdofihgdflkhg ldfigldifhrhr kfhdkghfdgjhdfg rueui oidfgod dlfghdflk lkorieeghlkdfhg  ihlhk ldfkghldfk ldfhgldh dflgh dfhgdlfhoidifrf ifufh rfhhd epe seoflk sdfioirnlkd aafsiouo ureutiuh oirutoer iodfhgdhf 8orutoeh fdihgkjdhf.</p>
                </div>
            </div>
            <div className="skills-btn">
                <Link to={'/skills'}>
                    <button type="button">SKILLS</button>
                </Link>
            </div>
        </Fragment>
    )
} export default Introduction;