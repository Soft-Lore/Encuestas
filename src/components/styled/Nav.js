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
    background-color: white;
    z-index: 10;
`; 
    
export const NavButton = styled(NavLink)`
    position: relative;
    padding: 7px 10px;
    ${Button};
    padding-top: 5px;
    text-decoration: none;
    margin-left: 10px;
    font-size: 1rem;
    
    @media screen and (max-width: 600px){
        font-size: .9rem;
    }
`;

export const SectionButtons = styled.section`
    ${flex};
`;

export const SectionLogOut = styled.div`
    position: relative;
    top: 0;
`;

export const ContainerOptions = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;

    &:hover ~ ul {
        display: block;
    }
`;

export const NameUser = styled.p`
    margin-right: 20px;
`;

export const ImgUser = styled.img`
    width: 30px;
`;

export const NavOptions = styled.div`
    ${Button};
    border-radius: 0;
    padding: 0;
    text-align: center;
    width: 140px;
    padding-top: 5px;
    height: 25px;
    outline: none;
    border: 1px solid #2f28a6;
    font-size: 1rem;

    @media screen and (max-width: 600px){
        height: 30px;
    }
`;

export const LogOutOptions = styled.ul`
    position: absolute;
    display: none;
    top: 65%;
    right: 5px;
    list-style: none;

    &:hover {
        display: block;
    }
`;