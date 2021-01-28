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
    padding-bottom: 10px;
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
    padding-top: 5px;
    text-align: center;
    width: 90px;
    margin-right: 10px;
    height: 25px;
    outline: none;
    border: 1px solid #2f28a6;

    @media screen and (max-width: 600px){
        height: 30px;
    }
`;

export const LogOutOptions = styled.ul`
    position: absolute;
    display: none;
    top: 60%;
    left: -80px;
    list-style: none;

    &:hover {
        display: block;
    }

    & li {
        margin-top: 5px;
    }
`;