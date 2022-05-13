import axios from "axios";
import { useEffect, useState } from "react"
// import { Card } from "react-bootstrap";
import { API_URLS } from "../../constants";
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

    const backgroundColors: any = {
        Basic: "linear-gradient(45deg, rgba(87,196,162,1) 0%, rgba(102,231,191,1) 20%, rgba(122,215,186,1) 82%)",
        Standard: "linear-gradient(45deg, rgba(122,137,217,1) 0%, rgba(157,170,242,1) 20%, rgba(192,199,240,1) 82%);",
        Premium: "linear-gradient(45deg, rgba(236,89,37,1) 0%, rgba(241,127,47,1) 20%, rgba(241,171,48,1) 82%); ",
    };

    return (
        <CardContainer>
            {
                prices.map((price: any) =>
                    <Card>
                        <CardHeader background={backgroundColors[price.nickname]}>
                            <PriceCircle>
                                <PriceText> ${price.unit_amount / 100}</PriceText>
                            </PriceCircle>
                        </CardHeader>

                        <CardBody>
                            <CardTitle>
                                {price.nickname}
                            </CardTitle>

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