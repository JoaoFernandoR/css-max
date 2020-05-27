import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Css
import './Footer.scss'

const Footer = () => {
    return (
    <footer id='footer'>
        <ul className="footer">
            <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} size='2x'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size='2x'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x'/>
                </a>
            </li>
            <li>
                <a href="/#">
                    <FontAwesomeIcon icon={['fab', 'google']} size='2x'/>
                </a>
            </li>
            <div className="footer_info">
                <li>
                    <a href="/#">Support</a>
                </li>
                <li>
                    <a href="/#">Terms of Use</a>
                </li>
            </div>
        </ul>
    </footer>
    )
}

export default Footer