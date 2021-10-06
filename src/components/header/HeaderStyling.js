import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const Container = styled.header`
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding: 1%; 
    max-width: 1500px;
`;

/* Heading styles */
export const Heading = styled.h1`
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
    width: 50%;
    text-shadow: 
    1px 1px 1px var(--darkerBody),
    2px 2px 1px var(--darkerBody),
    4px 4px 1px var(--darkerBody);
    @media screen and (max-width: 768px) {
        width: 60%;
    }
`;

/* Search styles */
export const Form = styled.form`
    justify-items: flex-end;
    vertical-align: baseline;
    height: 32px;
    width: 25%;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 5%;
    }
    @media screen and (max-width: 375px) {
        margin-top: 5%;
    }
`;

export const Input = styled.input`
    position: relative;
    height: 100%;
    width: 100%;
    outline: 0;
    border-radius: 16px;
    border: none;
    padding-left: 32px;
    font-size: 14px;
`;

export const SearchIcon = styled(FiSearch)`
    position: absolute;
    z-index: 1;
    font-size: 32px;
    align-self: center;
    justify-self: stretch;
    margin-right: 32px;
    color: var(--body);
`;