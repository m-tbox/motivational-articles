import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 4rem 1rem;
    justify-content: center;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);
    border-radius: 2rem;
    height: 30rem;
    padding: 10%;
`

export const Image = styled.img`
    width: 100%;
    height: 15rem;
    border-radius: 2rem;
    object-fit: cover;
`

export const Header = styled.h2`
    margin-top: 1rem;
    font-size: 1.25rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const Content = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: 0.8rem;
    
    margin-bottom: 0;
`

export const NoeArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10rem 0;

    &a {
        font-size: 2rem;
        text-decoration: none;
    }
`

export const ErrorHeader = styled.h2`
    font-size: 3rem;
`

export const RouteLink  = styled(Link)`
`

export const LearnMoreLink  = styled(Link)`
    font-size: 0.75rem;
    text-decoration: none;
`