import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Css
import './HeaderMob.scss'


const HeaderMob = props => {

    const { handleMobileBar, setPage } = props

    const myFunction = (param) => {
        setPage(param)
    }

    useEffect(() => handleMobileBar, [myFunction])

    return (
    <section id="mymobilenav">
        <div className="mybackdrop" onClick={handleMobileBar}></div>
        <header className="my_mobile_bar">
            <div className="brand brand_mobile" onClick={() => myFunction(0)}>
                <a href="/#">
                <FontAwesomeIcon icon="coffee"/> <span> uHost</span>
                </a>
            </div> 
            <ul className="mob_list">
                <li onClick={() => myFunction(1)}>
                    <a className= "nav_link" href="/#">Packages</a>
                </li>
                <li onClick={() => myFunction(2)}>
                    <a className= "nav_link" href="/#">Customers</a>
                </li>
                <li className="active_link active_link_mobile" onClick={() => myFunction(3)}>
                    <a href="/#">H</a>
                </li>
            </ul>
        </header>
    </section>
    )
}

export default HeaderMob