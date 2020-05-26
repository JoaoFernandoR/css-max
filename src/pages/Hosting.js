import React, {useState} from 'react'
// Css
import './Hosting.scss'
// Components
import StyledButton from '../shared/StyledButton'

const Hosting = () => {

    const [firstName, setFirstName] = useState('')

    const handleInputs = e => {
        setFirstName(e.target.value)
    }

    return (
    <section id="hosting">
        <h3> Awesome Let's dive right in</h3>
        <form onSubmit={(e) => e.preventDefault }>
            <div className="form_box">
                <div className="input_box_1">
                    <div className="input_box">
                        <label htmlFor="title"> Title</label>
                        <select name="title" id="title">
                            <option value="Mr."> Mr.</option>
                            <option value="Ms"> Ms</option>
                        </select>
                    </div>
                    <div className="input_box">
                        <label htmlFor="firstname"> First Name </label>
                        <input type='text' id='firstname' maxLength='20' name="firstname" value={firstName} onChange={handleInputs}/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="lastname"> Last Name </label>
                        <input type='text' id='lastname' maxLength='50'/>
                    </div>
                </div>
                <div className="input_box_1">
                    <div className="input_box email">
                        <label htmlFor="email"> E-mail </label>
                        <input type='email' id='email' maxLength='50'/>
                    </div>
                    <div className="input_box password">
                        <label htmlFor="password"> Password </label>
                        <input type='password' id='password' maxLength='50' required/>
                    </div>
                </div>
                <div className="input_checkbox">
                    <input type="checkbox"/> 
                    <h6>Agree to <span>Terms and Conditions</span></h6>
                </div>
                 <StyledButton backColor="#7CEC9F" color="#47535E" hovBack="#c1c1c1"> Sign Up </StyledButton>
            </div>
        </form>
    </section>
    )
}

export default Hosting