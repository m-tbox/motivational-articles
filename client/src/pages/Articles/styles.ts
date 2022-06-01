import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 4rem 0;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`

export const Card = styled.div`
    height: 50rem;
    width: 32%;
    box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);
    padding: 2rem;
    border-radius: 2rem;
    margin-right: 1rem;
    margin-left: 1.5rem;
`

export const Image = styled.img`
    width: 100%;
    height: 30rem;
    border-radius: 2rem;
`

export const Header = styled.h2`
    margin-top: 1rem;
    font-size: 1.5rem;
`

export const Content = styled.p`
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