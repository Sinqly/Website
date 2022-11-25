import Image from 'next/image'
import React from 'react'

import {
  Card,
  CardHeader,
  UserImage,
  Texts,
  Nome,
  Username,
  CardBody,
  Actions,
  Like,
  Comments,
  Save,
} from './styles'

import { PostCardInterface } from '../../utils/feed/PostCardInterface'

const PostCard: React.FC<PostCardInterface> = ({
  post,
  user,
}) => {
  
  return (
    <Card className="card">
      <CardHeader>
        <UserImage>
          <Image src={user?.profileImage} height={100} width={100} alt="Oi" />
        </UserImage>
        <Texts className="texts">
          <Nome
            href={`/profile/${user.username}`}
            onClick={() => {
              localStorage.setItem('currentUserFeedId', user.id)
            }}
          >
            {user.name} {user.lastName}
          </Nome>
          <Username>
            @{user.username}#0{user.id}
          </Username>
        </Texts>
      </CardHeader>
      <CardBody className="cardBody">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        
        {
          post?.image ? (
          <div style={{ minWidth: "300px", minHeight: "300px" }}>
            <Image src={post?.image} width={1000} height={500} alt="imagem"/> 
          </div> 
          ) : null
        }

        <Actions>
          <div>
            <Like />
            <Comments />
          </div>
          <Save />
        </Actions>
      </CardBody>
    </Card>
  )
}

export default PostCard
