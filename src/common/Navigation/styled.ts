import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none ;
    color: white;

    &.active {
        font-weight: bold;
    }
`;

export const StyledNav = styled.nav`
    width: 100%;
    background-color: teal;
    padding: 10px 20px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: teal;
    list-style: none;
    gap: 50px;
`;