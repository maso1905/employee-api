import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
    width: 100%;
    padding: 1%; 
    max-width: 1500px;
`;

export const List = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto; 
    margin-top: 1%;  
    padding: 2%;
    font-weight: 900;
    letter-spacing: -1px;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(3, 33.33%);
        margin-top: 5%;  
    }
    @media screen and (max-width: 668px){
        grid-template-columns: repeat(2, 50%);
        margin-top: 1%;  
        padding: 5%;
    }
`;

export const ListItem = styled.li`
    height: 100%;
    justify-content: stretch;
    align-items: center;
    padding: 25% 25% 0 25%;
    @media screen and (max-width: 768px){
        padding: 5% 5% 15% 5%;
    }
    @media screen and (max-width: 568px){
        text-align: left;
        padding: 5%;
    }
`;

export const EmployeeLink = styled(Link)`
    display: inline-block;
    text-align: right;
    font-size: 30px;
    line-height: .9;
    transform: skew(-55deg, 30deg) scaleY(1);
    text-shadow: 
        1px 1px var(--darkerBody),
        2px 2px var(--darkerBody),
        3px 3px var(--darkerBody),
        4px 4px var(--darkerBody),
        5px 5px var(--darkerBody),
        6px 6px var(--darkerBody);
    transition: all .2s ease-in-out;
    &:hover{
        transform: skew(-55deg,30deg) scale(1.1);
    }
    @media screen and (max-width: 1040px){
        font-size: 22px;
    }
    @media screen and (max-width: 768px){
        font-size: 18px;
    }
    @media screen and (max-width: 568px){
        transform: skew(0deg, 00deg) scaleY(1);
        font-size: 24px;
        text-align: left;
        &:hover{
            transform: skew(0deg,0deg) scale(1.05);
        }
    }
`;