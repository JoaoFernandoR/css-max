import React from 'react'
// Css
import './Main.css'
// Components
import Items from '../components/Items'
import Reasons from '../components/Reasons'


const Main = () => {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-image">
          <h1 className="title_main"> Get the freedom you deserve </h1>
        </div>
        <div className="title text-dark">
            <p> Choose your plan </p>
        </div>
        <Items />
        <Reasons />
      </div>
     
    </div>
    )
}

export default Main