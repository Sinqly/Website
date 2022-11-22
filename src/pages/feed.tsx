import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import PostCard from '../components/PostCard'
import SideCard from '../components/SideCard'
import UserList from '../components/UserList'

import { Container, Content } from '../styles/pages/feed'
import { PostCardInterface } from '../utils/feed/PostCardInterface'
// interface feedProps {}

const Feed: React.FC = () => {
  return (
    <>
      <Header headerType="General" />
      <Container>
        <SideCard />
        <Content className="content">
          {/* { 
            posts.map(post => {              
              return <PostCard 
                key={post.id}
                area='natureza'
                description={post.description}
                title={post.title}
                user={{
                  id: post.user.id,
                  name: post.user.name,
                  lastName: post.user.lastName,
                  username: post.user.username
                }}
              />
            })
          } */}
        </Content>
        <UserList />
      </Container>
    </>
  )
}

export default Feed
