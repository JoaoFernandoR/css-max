import React from 'react'
// Css
import './Customers.scss'


const Customers = () => {
    return (
    <section id="customers">
        <div className="testimonial" id="customer-1">
            <div className="testimonial__image-container"> 
                <div className="image-1"></div>
            </div>
            <div className="testimonial__info">
                <h1>Mike Statham</h1>
                <h2>Founder of
                    <a href="https://tech-analysis.com" target="_black" > tech-analysis.com</a>
                </h2>
                <p>uHost helped me realize my project with a highly constrained budget in like no time.</p>
            </div>
        </div>
        <div className="testimonial" id="customer-2">
            <div className="testimonial__info">
                <h1>John Mellow</h1>
                <h2>Hosts his private videos on uHost. </h2>
                <p>I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
                    it in uHost!
                </p>
            </div>
            <div className="testimonial__image-container">
                <div className="image-2"></div>
            </div>
        </div>
    </section>
    )
}

export default Customers