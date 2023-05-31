import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ImageContainer = styled.img`
    width: ${(props) => props.size ?? "10rem"};
    height: 10rem;
    margin-inline: 2rem;
`

export const EventContainer = styled.div`
    background-color: ${(props) => props.theme.white}

    a {
        text-decoration: none

    }
`

export const NavContainer = styled(NavLink)`
`