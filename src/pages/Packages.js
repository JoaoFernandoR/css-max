import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// Css
import './Packages.scss'


const Packages = () => {
    return (
    <section id="packages">
        <div className="mycard">
            <h2>Our PLUS Plan</h2>
            <h3>The most popular choice of our customers.</h3>
            <p>Benefit from increased storage and faster support to ensure that your mission-critical data and applications
                are always available!</p>
            <div className="icon-container">
                <FontAwesomeIcon icon={['fab', 'wolf-pack-battalion']} size='3x' color="#F3B431"/>
            </div>
        </div>
        <div className="mycard">
            <h2>Our FREE Plan</h2>
            <h3>An extremely solid start into our hosting world.</h3>
            <p>Get started immediately at zero cost!</p>
        </div>
        <div className="mycard active">
            <h2>Our PREMIUM Plan</h2>
            <h3>All your enterprise needs. Instant support, guaranteed uptime. </h3>
            <p>The best solution for small to large enterprises. Because hosting shouldn't be in the way!</p>
        </div>
    </section>
    )
}

export default Packages