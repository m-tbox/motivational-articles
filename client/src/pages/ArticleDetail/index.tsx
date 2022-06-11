import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { callGetArticleByIdApi } from '../../services/api'
import { Article } from '../../types/articles'
import { Container, Content, ContentContainer, Image, Title } from './styles';

const ArticleDetail = () => {
    const [article, setArticle] = useState<Article>()
    const { id } = useParams()


    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        const data = await callGetArticleByIdApi(id as string)
        setArticle(data)
    }

    return (
        <Container>
            <Image src={article?.imageUrl} alt="image" />

            <ContentContainer>
                <Title>{article?.title}</Title>

                <Content>
                    {article?.content}
                </Content>
            </ContentContainer>
        </Container>
    )
}

export default ArticleDetail