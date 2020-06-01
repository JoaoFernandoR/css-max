import React from 'react'
// Css
import styles from './Main.module.scss'
// Components
import Items from '../components/Items'
import Reasons from '../components/Reasons'


const Main = () => {
    return (
    <div>
      	<div className={styles.bg_image}>
          <h1> 
            Get the freedom you deserve 
          </h1>
        </div>
		<h2 className={styles.h2}> Choose your plan </h2>
      <Items />
      <Reasons />
    </div>
    )
}

export default Main

