import React from 'react'
// Css
import './Customers.css'


const Customers = () => {
    return (
    <section id="customers">
        <div className="testimonial" id="customer-1">
            <div className="testimonial__image-container1"> <div className="image-1"></div></div>
            <div className="testimonial__info">
                <h1 className="testimonial__name">Mike Statham</h1>
                <h2 className="testimonial__subtitle">Founder of
                    <a href="https://tech-analysis.com" target="_black" > tech-analysis.com</a>
                </h2>
                <p className="testimonial__text">uHost helped me realize my project with a highly constrained budget in like no time.</p>
            </div>
        </div>
        <div className="testimonial" id="customer-2">
            <div className="testimonial__info">
                <h1 className="testimonial__name">John Mellow</h1>
                <h2 className="testimonial__subtitle">Hosts his private videos on uHost.
                </h2>
                <p className="testimonial__text">I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
                    it in uHost!
                </p>
            </div>
            <div className="testimonial__image-container2"></div>
        </div>
    </section>
    )
}

export default Customers