import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from './Buttons'
   
const flex = css`
    display: flex;
`;
    
export const NavBar = styled.nav`
    ${flex};
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #CED4DA;
`; 
    
export const NavButton = styled(NavLink)`
    position: relative;
    ${Button};
    height: 28px;
    padding-top: 5px;
    text-decoration: none;
    margin-left: 10px;
    font-size: 1rem;

    @media screen and (max-width: 600px){
        height: 25px;
        font-size: .9rem;
        padding-top: 3px;
    }
`;

export const SectionButtons = styled.section`
    ${flex};
`;

export const NavLogOut = styled.button`
    ${Button};
    margin-right: 10px;
    height: 35px;
    outline: none;
    border: none;

    @media screen and (max-width: 600px){
        height: 30px;
    }
`;