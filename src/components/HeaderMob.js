import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Css
import './HeaderMob.css'


const HeaderMob = props => {

    const { handleMobileBar, setPage } = props

    return (
    <section id="mymobilenav">
        <div className="mybackdrop" onClick={handleMobileBar}></div>
        <header className="my_mobile_bar">
            <div className="brand brand_mobile" onClick={() => setPage(0)}>
                <a href="/#">
                <FontAwesomeIcon icon="coffee"/> <span> uHost</span>
                </a>
            </div> 
            <ul className="mob_list">
                <li onClick={() => setPage(1)}>
                    <a className= "nav_link" href="/#">Packages</a>
                </li>
                <li onClick={() => setPage(2)}>
                    <a className= "nav_link" href="/#">Customers</a>
                </li>
                <li className="active_link" onClick={() => setPage(3)}>
                    <a href="/#">Start Hosting</a>
                </li>
            </ul>
        </header>
    </section>
    )
}

export default HeaderMob