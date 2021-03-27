import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Error from 'next/error'
import styled from 'styled-components';

import { useGetArticleQuery } from '@/generated/graphql'

const Container = styled.div`
  width: 700px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 30px;
`;

const Subject = styled.h1`
  margin-top: 32px;
  font-size: 40px;
  line-height: 48px;
`;

const UserContainer = styled.div`
  margin-top: 32px;
  display: flex;
`;

const UserId = styled.div`
  font-size: 16px;
`;

const UserName = styled.span`
  font-size: 16px;
  opacity: 0.5;
`;

const Content = styled.div`
  margin-top: 32px;
`;

const ArticlePage: NextPage = () => {
    const router = useRouter()
    const { articleId } = router.query

    const { loading, error, data } = useGetArticleQuery({
        variables: {
            id: articleId as string,
        },
    })

    if (loading) {
        return <p>...loading</p>
    }
    if (error) {
        return <p>{error.toString()}</p>
    }

    if (!data || !data.articles_by_pk) {
        return <Error statusCode={404} />
    }

    const { user, subject, content } = data.articles_by_pk

    return (
        <Container>
            <Subject>{subject}</Subject>
            <UserContainer>
                <div>
                    <UserId>{user.displayId}</UserId>
                    <UserName>{user.displayName}</UserName>
                </div>
            </UserContainer>
            <Content>{content}</Content>
        </Container>
    )
}

export default ArticlePage
