import styled, { css } from 'styled-components'

const width = css`
    width: 100%;
`;

export const Card = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    border: 1px solid #555;
    border-radius: 15px;
    overflow: hidden;
`;

export const CardHeaders = styled.div`
    position: relative;
    top: -20px;
    ${width};
    height: 60px;
`
    
export const CardItem = styled.div`
    top: -50px;
`;
    
export const CardHeader = styled.img`
    position: absolute;
    top: -10px;
    ${width};
    border-radius: 15px 15px 0 0;
    height: 100%;
`;
    
export const CardButton = styled.div`
    position: absolute;
    bottom: 0;
    ${width};
    border-top: 1px solid #555;
    cursor: pointer;
    text-align: center;
    height: 40px;
    padding-top: 8px;
`;