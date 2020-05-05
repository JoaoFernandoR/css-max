import React from 'react'
// Css
import './Main.css'
// Components
import Items from '../components/Items'


const Main = () => {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-image">
          <h1 className="title"> Get the freedom you deserve </h1>
        </div>
        <div className="title text-dark">
            <p> Choose your plan </p>
        </div>
        <Items />
      </div>
      <section id="reasons">
        <div className="row">
          <div className="col-10 mx-auto text-white">
          <h1 className="text-center p-5 title text-white">Many Good Reasons to Stick Around</h1>
            <ul>
                <li>
                    <div>

                    </div>
                    <p>3,857,000 Trusting Customers</p>
                </li>
                <li>
                    <div>

                    </div>
                    <p>99.999% Uptime Guarantee</p>
                </li>
                <li>
                    <div>

                    </div>
                    <p>Lightning Fast CDN</p>
                </li>
            </ul>
          </div>
        </div>
        </section>
    </div>
    )
}

export default Main