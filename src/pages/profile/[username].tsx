import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import PostCard from '../../components/PostCard'
import { SideCardHome, SideCardVisitant } from '../../components/SideCard'
import UserList from '../../components/UserList'

import { api } from '../../config/Axios'
import { Container, Content } from '../../styles/pages/feed'
import { PostInterface } from '../../utils/feed/PostCardInterface'
import { User } from '../../utils/UserInterface'

export default function CurrentFeed(user) {
  const currentUserFeed = user.user
  console.log(currentUserFeed)

  const { username } = user.user

  const [posts, setPosts] = useState<PostInterface[]>([])

  const getUserPosts = async () => {
    await api
      .get(`/posts/user/${currentUserFeed.id}`)
      .then((posts) => setPosts(posts.data))
  }

  useEffect(() => {
    getUserPosts()
  }, [])
  return (
    <>
      <Header headerType="General" />
      <Container>
        <SideCardVisitant user={currentUserFeed} />
        <Content className="content">
          {posts.length == 0 ? (
            <h1 style={{ marginTop: 50 }}>O Usuário ainda não possui posts</h1>
          ) : null}
          {posts.map((post) => {
            return <PostCard key={post.id} post={post} user={post.user} />
          })}
        </Content>
        <UserList />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = params?.username

  const res = await api.get(`/users/findUsername/${username}`)
  const user = await res.data

  return {
    props: {
      user: user,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const users: User[] = await api.get(`/users`).then((users) => users.data)

  const paths = users.map((user) => ({
    params: { username: user.username },
  }))

  return { paths, fallback: false }
}
