import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Css
import './Header.css'

const Header = props => {

    const {setPage} = props
    return (
    <header className="d-flex p-1 align-items-center">
        <div className="brand">
            <a href="/#" onClick={() => setPage(0)}>
            <FontAwesomeIcon icon="coffee"/> uHost
            </a>
        </div>
        <nav className="w-100">
            <ul>
                <li>
                    <a href="/#" onClick={() => setPage(1)}>Packages</a>
                </li>
                <li>
                    <a href="/#" onClick={() => setPage(2)}>Customers</a>
                </li>
                <li className="active_link">
                    <a href="/#">Start Hosting</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header