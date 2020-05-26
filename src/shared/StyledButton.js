import styled from 'styled-components'

const StyledButton = styled.button`
    
    padding : 0.5rem 1rem;
    border-radius: 5px;
    margin: 1.3rem 0px;
    background-color: ${props => props.backColor || 'green'};
    border: none;
    color: ${props => props.color || 'white'};
    font-weight: bold;


    &:hover {
        color: green;
        background-color: ${props => props.hovBack || 'white'};
    }

    &:focus {
        outline: none;
}

`

export default StyledButton