import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { callGetArticlesApi } from "../../services/api"
import {
    CardContainer,
    Card,
    Image,
    Header,
    Content,
    NoeArticlesContainer,
    ErrorHeader,
} from "./styles";

interface Article {
    _id: string;
    title: string;
    imageUrl: string;
    content: string;
}

const Articles = () => {

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        const data = await callGetArticlesApi()
        setArticles(data)
    }

    return (
        <div>
            {
                articles.length > 0 ? (
                    <CardContainer>
                        {
                            articles.map(article =>
                                <Card key={article._id}>
                                    <Image src={article.imageUrl} />
                                    <Header> {article.title} </Header>
                                    <Content> {article.content} </Content>
                                </Card>
                            )
                        }
                    </CardContainer>
                ) : (
                    <NoeArticlesContainer>
                        <ErrorHeader>
                            You don't have access yet
                        </ErrorHeader>
                        <Link to="/article-plans"> Buy a plan </Link>
                    </NoeArticlesContainer>
                )
            }
        </div>
    )
}

export default Articles