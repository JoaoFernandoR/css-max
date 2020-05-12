import React from 'react'
// Css
import './Main.css'
// Components
import Items from '../components/Items'
import Reasons from '../components/Reasons'


const Main = () => {
    return (
    <section id="main">
      <div className="col-12 bg-image">
          <h1 className="title_main"> 
            Get the freedom you deserve 
          </h1>
        </div>
      <div className="title text-dark">
          <p> Choose your plan </p>
      </div>        
      <Items />
      <Reasons />
    </section>
    )
}

export default Main

