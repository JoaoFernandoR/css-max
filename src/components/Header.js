import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Css
import './Header.css'
// Components
import HeaderMob from './HeaderMob'

const Header = props => {

    const {setPage} = props
    const [mobileBar, setMobileBar] = useState(false)

    const handleMobileBar = () => {
        setMobileBar(!mobileBar)
    }

    return (
    <header className="d-flex p-1 align-items-center my_nav_bar">
        {(mobileBar) ? <HeaderMob handleMobileBar={handleMobileBar} setPage={setPage}/> : null }
        <div className="brand">
            <a href="/#" onClick={handleMobileBar}>
            <FontAwesomeIcon icon="bars" size='2x'/> 
            </a>
        </div>
        <div className="brand">
            <a href="/#" onClick={() => setPage(0)}>
            <FontAwesomeIcon icon="coffee"/> uHost
            </a>
        </div>
        <nav className="w-100">
            <ul className="nav_list">
                <li className="nav_list_items">
                    <a className= "nav_link" href="/#" onClick={() => setPage(1)}>Packages</a>
                </li>
                <li>
                    <a className= "nav_link" href="/#" onClick={() => setPage(2)}>Customers</a>
                </li>
                <li className="active_link">
                    <a className= "nav_link" href="/#">Start Hosting</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header
