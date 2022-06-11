import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { UserContext } from "../../context";
import { callGetArticlesApi } from "../../services/api"
import { Article } from "../../types/articles"
import {
    CardContainer,
    Card,
    Image,
    Header,
    Content,
    NoeArticlesContainer,
    ErrorHeader,
    RouteLink,
    LearnMoreLink
} from "./styles";

const Articles = () => {

    const [articles, setArticles] = useState<Article[]>([])
    const [userState, setState] = useContext(UserContext);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        setLoading(true)
        const data = await callGetArticlesApi()
        setLoading(false)

        console.log(data)
        setArticles(data)
    }

    if (articles.length > 0 && !loading) {
        return (
            <div>
                <CardContainer>
                    {
                        articles.map(article =>
                            <Card key={article._id}>
                                <Image src={article.imageUrl} />
                                <Header> {article.title} </Header>
                                <Content> {article.content} </Content>

                                <LearnMoreLink to={`/article-detail/${article._id}`}>
                                    Learn More
                                </LearnMoreLink>

                            </Card>
                        )
                    }
                </CardContainer>

            </div>
        )
    } else if (articles.length === 0 && loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <NoeArticlesContainer>
                <ErrorHeader>
                    You don't have access yet
                </ErrorHeader>
                <Link to="/article-plans"> Buy a plan </Link>
            </NoeArticlesContainer>
        )
    }
}

export default Articles