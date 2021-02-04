import styled, { keyframes } from 'styled-components'
import { Button } from './Buttons'
import { CgAddR } from 'react-icons/cg'

export const IconAdd = styled(CgAddR)`
    position: relative;
    left: 10px;
    top: 1px;
    padding-right: 5px;
`;

export const MySurveys = styled.section`
    padding-top: 20px;
    border-radius: 15px 15px 0 0;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 40px;
    width: 85%;
    background-color: white;
    min-height: calc(100vh - 80px);
    -webkit-box-shadow: 1px 6px 22px -10px rgba(33,37,41,1);
    -moz-box-shadow: 1px 6px 22px -10px rgba(33,37,41,1);
    box-shadow: 1px 6px 22px -10px rgba(33,37,41,1);

    @media screen and (max-width: 850px){
        width: 90%;
    }

    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

export const ButtonAddSurvey = styled.button`
    padding: 7px 0;
    ${Button}
    color:  #2f28a6;
    position: relative;
    display: block;
    outline: none;
    margin: auto;
`;

const cardsAnimation = keyframes`
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0);
    }
`;

export const CardContainer = styled.div`
    animation: ${cardsAnimation} .6s ease-out;
    animation-fill-mode: forwards; 
    padding: 30px 0;
    margin: auto;
    width: 98%;
    display: grid;
    grid-template-columns: repeat(4, 240px);
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    @media screen and (max-width: 1150px){
        grid-template-columns: repeat(3, 1fr);
        width: 95%;
    }
    @media screen and (max-width: 850px){
        grid-template-columns: repeat(2, 250px);
        width: 98%;
    }
    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, .5fr);
    }
`;