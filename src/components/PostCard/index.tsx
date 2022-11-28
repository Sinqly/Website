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

const PostCard: React.FC<PostCardInterface> = ({ post }) => {
  if (!!post) {
    // console.log(post)
    const user = post.user

    return (
      <Card className="card">
        <CardHeader>
          <div>
            <UserImage>
              {
                user?.profileImage != "{}" ? 
                (
                  <Image src={user?.profileImage} height={100} width={100} alt="Oi" />
                ) : 
                (
                  <div>{user.name[0]}{user?.lastName[0]}</div>
                )
              }
            </UserImage>
            <Texts className="texts">
              <Nome
                href={`/profile/${user?.username}`}
                onClick={() => {
                  localStorage.setItem(
                    'currentUserFeedId',
                    JSON.stringify(user?.id)
                  )
                }}
              >
                {user?.name} {user?.lastName}
              </Nome>
              <Username>
                @{user?.username}#0{user?.id}
              </Username>
            </Texts>
          </div>
          <div className='ch-right' onClick={() => {
            console.log('OI')
          }}>
            ...
          </div>
        </CardHeader>
        <CardBody className="cardBody">
          <h3>{post.title}</h3>
          <p>{post.description}</p>

          <div
            style={{
              maxWidth: '100%',
              minHeight: '300px',
              height: 'auto',
              position: 'relative',
              display: 'block',
            }}
          >
            {post?.image != undefined || post.image != "{}" ? 
              (
                <Image
                  src={post?.image}
                  layout="fill"
                  objectFit="contain"
                  alt="imagem"
                />
              ) : 
              <div>OI</div>
            }
          </div>

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
  } else {
    return <></>
  }
}

export default PostCard
