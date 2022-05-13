import styled from "styled-components";
import BootstrapCard from "react-bootstrap/Card";

type Props = {
    background: string,
}

export const CardContainer = styled.div`
    display: flex;
    height: 75vh;
    align-items: center;
    justify-content: center;
`

export const Card = styled(BootstrapCard)`
    height: 25rem;
    width: 18rem;
    margin-right: 2rem;

    box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);
`

export const CardHeader = styled.div<Props>`
    display: flex;
    height: 15rem;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 00.25rem;
    border-top-right-radius: 00.25rem;

    background: ${p => p.background};
`
export const CardTitle = styled(BootstrapCard.Title)`
    margin-bottom: 1.5rem;
`

export const CardBody = styled(BootstrapCard.Body)`
`

export const PriceCircle = styled.div`
    border: 0.5rem solid white;
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);
`

export const PriceText = styled.p`
   font-size: 2rem;
   color: white;
   text-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);
`