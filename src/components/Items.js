import React from 'react'
// Css
import './Items.css'


const Items = () => {
    return (
        <section id="items">
              <div className='item'>
                  <h2>FREE</h2>
                  <h3>$0/month</h3>
                  <h4>For hobby projects or small teams.</h4>
                  <ul>
                      <li>1 Workspace</li>
                      <li>Unlimited Traffic</li>
                      <li>10GB Storage</li>
                      <li>Basic Support</li>
                  </ul>
                  <div>
                      <button>CHOOSE PLAN</button>
                  </div>
              </div>
              <div className='item'>
                <h2 className="highlighted">RECOMMENDED</h2>
                  <h2>PLUS</h2>
                  <h3 className="recom_price">$29/month</h3>
                  <h4>For ambitious projects.</h4>
                  <ul>
                      <li>5 Workspaces</li>
                      <li>Unlimited Traffic</li>
                      <li>100GB Storage</li>
                      <li>Plus Support</li>
                  </ul>
                  <div>
                      <button>CHOOSE PLAN</button>
                  </div>
              </div>
              <div className='item'>
                  <h2>PREMIUM</h2>
                  <h3>$99/month</h3>
                  <h4>Your enterprise solution.</h4>
                  <ul>
                      <li>10 Workspaces</li>
                      <li>Unlimited Traffic</li>
                      <li>Unlimited Storage</li>
                      <li>Priority Support</li>
                  </ul>
                  <div>
                      <button>CHOOSE PLAN</button>
                  </div>
              </div>
            </section>
    )
}

export default Items