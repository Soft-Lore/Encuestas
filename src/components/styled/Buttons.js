import { css } from 'styled-components'

export const Button = css`
    background-color: ${ props => props.secondary ? "#212529" : null };
    color: ${ props => !props.secondary ? "#212529" : "#CED4DA" };
    border: 1px solid ${ props => !props.secondary ? "#212529" : null };
    display: block;
    width: max-content;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 80px;
    cursor: pointer;
    font-family: 'Dosis', sans-serif;
    font-size: 1rem;

    @media screen and (min-width: 600px){
        transition: all .1s ease-in;
    
        &:hover {
            background-color: ${ props => !props.secondary ? "#212529" : "transparent" };;
            color: ${ props => props.secondary ? "#212529" : "#CED4DA" };
            border: 1px solid ${ props => props.secondary ? "#212529" : null };
        }
    }

    @media screen and (max-width: 600px){
        padding-left: 15px;
        padding-right: 15px;
    }
`;