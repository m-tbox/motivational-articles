import axios from "axios";
import { useEffect, useState } from "react"
// import { Card } from "react-bootstrap";
import { API_URLS, PRODUCT_DESCRIPTON } from "../../constants";
import {
    CardContainer,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    PriceCircle,
    PriceText
} from "./styles";

import Button from "../../components/Button"

type Props = {}

const ArticlesPlan = ({ }: Props) => {

    const [prices, setPrices] = useState<any[]>([]);

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const { data: response } = await axios.get(API_URLS.subscriptionPrices);
        setPrices(response.data);
    }

    // const backgroundColors: any = {
    //     Basic: "rgb(104, 219, 104)",
    //     Standard: "rgb(185, 42, 23, 0.835)",
    //     Premium: "pink",
    // };

    return (
        <CardContainer>
            {
                prices.map((price: any, index: number) =>
                    <Card
                        key={index}
                        plan={price.nickname}
                    >
                        <CardHeader>
                            <PriceCircle
                                plan={price.nickname}
                            >
                                <PriceText> ${price.unit_amount / 100}</PriceText>
                            </PriceCircle>
                        </CardHeader>

                        <CardBody>
                            <CardTitle>
                                {price.nickname}
                            </CardTitle>

                            <ul>
                                {
                                    PRODUCT_DESCRIPTON[price.nickname]?.map((descripton, index) =>
                                        <li key={index}>
                                            {descripton}
                                        </li>
                                    )
                                }
                            </ul>


                            <Button
                                title="Buy now"
                                primary
                            />

                        </CardBody>
                    </Card>
                )
            }
        </CardContainer>
    )
}

export default ArticlesPlan