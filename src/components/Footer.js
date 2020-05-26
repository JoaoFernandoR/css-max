import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Css
import './Footer.css'

const Footer = () => {
    return (
    <footer id="footer">
        <div className="icon_container">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                <FontAwesomeIcon icon={['fab', 'facebook']} size='2x'/>
            </a>
            <a href="/#" className="icon">
                <FontAwesomeIcon icon={['fab', 'twitter']} size='2x'/>
            </a>
            <a href="/#" className="icon">
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x'/>
            </a>
            <a href="/#" className="icon">
                <FontAwesomeIcon icon={['fab', 'google']} size='2x'/>
            </a>
            <ul className="footer_info">
                <li>
                    <a href="/#">Support</a>
                </li>
                <li>
                    <a href="/#">Terms of Use</a>
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer