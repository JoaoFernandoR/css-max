import React from 'react'
// Css
import styles from './Modal.module.css'
// Components
import StyledButton from '../shared/StyledButton'

const Modal = props => {

    const {handleModal} = props

    return (
    <section>
        <div className="mybackdrop" onClick={handleModal}> </div>
        <div className={styles.mymodal}>
            <h2>
                Want to continue ?
            </h2>
            <div>
                <StyledButton style={{"margin-right" : '2rem'}}> yes </StyledButton>
                <StyledButton backColor="red" hovBack="red" onClick={handleModal}> no </StyledButton>
            </div>
        </div>
    </section>
    )
}

export default Modal