import { css } from 'styled-components'

export const Button = css`
    background-color: #6C63FF;
    color: #fff;
    display: block;
    width: max-content;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 80px;
    cursor: pointer;
    font-family: 'Dosis', sans-serif;
    border: 1px solid #919191;
    font-size: 1rem;
    box-shadow: 1px 1px 3px black;

    @media screen and (min-width: 600px){
        transition: all .1s ease-in;
    
        &:hover {
            background-color: transparent;
            color: #6C63FF;
            border: 1px solid #6C63FF;
        }
    }

    @media screen and (max-width: 600px){
        padding-left: 15px;
        padding-right: 15px;
    }
`;