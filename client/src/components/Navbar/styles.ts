import styled from "styled-components";
import BootstrapNavbar from "react-bootstrap/Navbar";
import BootstrapNavLink from "react-bootstrap/NavLink";
import { Link } from "react-router-dom";

export const LeftNavContainer = styled.div`
    margin-left: auto;
`;

export const Navbar  = styled(BootstrapNavbar)`
    background-color: var(--app-primary-color);
`

export const RouteLink  = styled(Link)`
    color: var(--app-text-color);
    cursor: pointer;
`

export const NavLink  = styled(BootstrapNavLink)`
    color: var(--app-text-color);
`