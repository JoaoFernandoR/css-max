import React from 'react'
// Css
import './Modal.css'

const Modal = props => {

    const {handleModal} = props

    return (
    <section id="mymodal">
        <div className="mybackdrop" onClick={handleModal}> </div>
        <div className='mymodal'>
            <h2>
                Want to continue ?
            </h2>
            <div className='modal_buttons'>
                <button> yes </button>
                <button className="negative" onClick={handleModal}> no </button>
            </div>
        </div>
    </section>
    )
}

export default Modal