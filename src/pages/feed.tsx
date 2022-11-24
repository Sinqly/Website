import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import PostCard from '../components/PostCard'
import { SideCardHome } from '../components/SideCard'
import UserList from '../components/UserList'
import { api } from '../config/Axios'

import { Container, Content } from '../styles/pages/feed'

import { PostCardInterface } from '../utils/feed/PostCardInterface'

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostCardInterface[]>([])

  useEffect(() => {
    api.get('/posts').then((posts) => setPosts(posts.data))
  }, [])
  return (
    <>
      <Header headerType="General" />
      <Container>
        <SideCardHome />
        <Content className="content">
          {posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                area="natureza"
                description={post.description}
                title={post.title}
                user={{
                  id: post.user.id,
                  name: post.user.name,
                  lastName: post.user.lastName,
                  username: post.user.username,
                }}
              />
            )
          })}
        </Content>
        <UserList />
      </Container>
    </>
  )
}

export default Feed
