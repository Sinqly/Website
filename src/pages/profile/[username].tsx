import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import PostCard from '../../components/PostCard'
import { SideCardVisitant } from '../../components/SideCard'
import UserList from '../../components/UserList'
import { api } from '../../config/Axios'
import { getCurrentUserFeedId } from '../../services/Feed/getUserData'

import { Container, Content } from '../../styles/pages/feed'

import { PostCardInterface } from '../../utils/feed/PostCardInterface'
import { User } from '../../utils/UserInterface'

const CurrentFeed: React.FC = () => {
  const [posts, setPosts] = useState<PostCardInterface[]>([])
  const [currentUserFeed, setCurrentUserFeed] = useState<User>({
    id: 0,
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    cpf: "",
    biography: "",
    profileImage: ""
  })
  
  const getUserData = async () => {
    // GET CURRENT USER
    const currentUserFeed = await getCurrentUserFeedId()
    setCurrentUserFeed(currentUserFeed)

    // GET POSTS FROM CURRENT USER
    const id = localStorage.getItem("currentUserFeedId")
    await api.get(`/posts/user/${id}`)
      .then(posts => setPosts(posts.data))
  }

  useEffect(() => {
    getUserData()
  }, [])
  
  return (
    <>
      <Header headerType="General" />
      <Container>
        <SideCardVisitant user={currentUserFeed}/>
        <Content className="content">
          { 
           posts.map(post => {              
              return <PostCard 
                key={post.id}
                area='natureza'
                description={post.description}
                title={post.title}
                user={{
                  id:  post.user.id,
                  name: post.user.name,
                  lastName: post.user.lastName,
                  username: post.user.username
                }}
              />
            })
          }
        </Content>
        <UserList />
      </Container>
    </>
  )
}

export default CurrentFeed;
