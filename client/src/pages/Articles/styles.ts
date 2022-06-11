import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 4rem 1rem;
    /* display: flex; */
    /* align-items: center; */
    justify-content: center;

    /* background-color: aliceblue; */

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    /* height: 50rem; */
    /* width: 32%; */
    box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);
    /* padding: 2rem; */
    border-radius: 2rem;
    /* margin-right: 1rem; */
    /* margin-left: 1.5rem; */

    /* background-color: aqua; */
    height: 30rem;
    /* flex: 1; */
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
    font-size: 1.5rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const Content = styled.p`
    /* overflow: hidden;
    text-overflow: ellipsis;

    background-color: aquamarine;

    display: inline-block; 
    text-overflow: ellipsis;
    width: calc(80%);

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    /* background-color: azure; */
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