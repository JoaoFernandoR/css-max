import React, {useState} from 'react'
// Css
import './Items.css'
// Componentes
import Modal from './Modal'
import StyledButton from '../shared/StyledButton'

const Items = () => {

    const [turnModal, setTurnModal] = useState(false)

    const handleModal = () => {
        setTurnModal(!turnModal)
    }    

    return (
    <section id="items">
        { (turnModal) ? <Modal handleModal={handleModal}/> : null}
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
                <StyledButton onClick={handleModal}> CHOOSE PLAN </StyledButton>  
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
                <StyledButton onClick={handleModal}> CHOOSE PLAN </StyledButton>  
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
                <StyledButton onClick={handleModal}> CHOOSE PLAN </StyledButton>  
            </div>
        </div>
    </section>
    )
}

export default Items
