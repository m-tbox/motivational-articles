import styled from "styled-components";
import BootstrapCard from "react-bootstrap/Card";
import { SUBSCRIPTION_CARD_COLORS } from "../../constants";

interface CardProps {
    plan: string;
}
interface PriceCircleProps {
    plan: string;
}

export const CardContainer = styled.div`
    display: flex;
    height: 75vh;
    align-items: center;
    justify-content: center;
`

export const Card = styled(BootstrapCard) <CardProps>`
    height: 25rem;
    width: 18rem;
    margin-right: 2rem;

    box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);

    /* align-items: center; */

    background: ${p => SUBSCRIPTION_CARD_COLORS.background[p.plan]};
    color: ${p =>  SUBSCRIPTION_CARD_COLORS.color[p.plan]};
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 00.25rem;
    border-top-right-radius: 00.25rem;

    padding-top: 2rem;
    /* background-color: pink; */
`
export const CardTitle = styled(BootstrapCard.Title)`
    margin-bottom: 1.5rem;
`

export const CardBody = styled(BootstrapCard.Body)`
    /* background-color: aliceblue; */
    /* justify-content: center; */
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const PriceCircle = styled.div <PriceCircleProps>`
    /* border: 0.5rem solid white; */
    width: 8.5rem;
    height: 8.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color); */

    background: ${p => SUBSCRIPTION_CARD_COLORS.priceCircleBackground[p.plan]};
    color: ${p => SUBSCRIPTION_CARD_COLORS.priceCircleText[p.plan]};
`

export const PriceText = styled.span`
   font-size: 2rem;
   /* text-shadow: 0.1rem 0.1rem 1rem var(--shadow-color); */
`