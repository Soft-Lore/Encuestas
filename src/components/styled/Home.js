import styled from 'styled-components'
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
    margin-top: 60px;
    width: 85%;
    background-color: white;
    height: calc(100vh - 80px);
    -webkit-box-shadow: 1px 6px 22px -10px rgba(33,37,41,1);
    -moz-box-shadow: 1px 6px 22px -10px rgba(33,37,41,1);
    box-shadow: 1px 6px 22px -10px rgba(33,37,41,1);

    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

export const ButtonAddSurvey = styled.button`
    padding: 7px 0;
    ${Button}
    position: relative;
    display: block;
    margin: auto;
`;