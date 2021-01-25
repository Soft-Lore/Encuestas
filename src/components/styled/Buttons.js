import { css } from 'styled-components'

export const Button = css`
background-color: ${props => props.secondary === 'true' ? '#2f28a6' : 'transparent'};
color: ${props => props.secondary === 'true' ? '#fff' : null};
    display: block;
    width: max-content;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    border: 1px solid #2f28a6;
    font-size: 1rem;

    @media screen and (min-width: 600px){
        transition: all .1s ease-in;
    
        &:hover {
            background-color: #2f28a6;
            color: #fff;
            border: 1px solid #2f28a6;
        }
    }

    @media screen and (max-width: 600px){
        padding-left: 15px;
        padding-right: 15px;
    }
`;