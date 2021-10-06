import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavMenu = styled.ul`
    display: flex;
    width: 25%;
    margin-top: -50px;
    max-width: 1500px;
    @media screen and (max-width: 768px) {
        width: 40%;
    }
`;

export const NavItem = styled.li`
    background-color: var(--darkerBody);
    height: 100px;
    width: 100%;
    margin-right: 5%;
    box-shadow: 6px 6px 1px var(--darkerAccentColor);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    align-items: center;
    justify-content: stretch;
    position: relative;
`;

export const NavLink = styled(Link)`
    text-transform: uppercase;
    padding-bottom: 5%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;