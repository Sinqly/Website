import Image from 'next/image'
import React from 'react'

import { Card, CardHeader, UserImage, Texts, Nome, Username, CardBody, Actions, Like, Comments, Save, NotLike  } from './styles'

import Careca from '../../assets/Images/Feed/Careca.png'
import Imagem from '../../assets/Images/Feed/imagem_feed.jpg'
import { PostCardInterface } from '../../utils/feed/PostCardInterface'


const PostCard: React.FC<PostCardInterface> = ({ id, area, description, title, user }) => {
  

  return (
    <Card className='card'>
      <CardHeader>
        <UserImage>
          <Image  src={Careca} alt="Foto do usuário" />
        </UserImage>
        <Texts className='texts'>
          <Nome>{user.name} {user.lastName}</Nome>
          <Username>@{user.username}#0{user.id}</Username>
        </Texts>
      </CardHeader>
      <CardBody className='cardBody'>
        <h3>{title}</h3>
        <p style={{}}>
          {description}
        </p>
        <Image src={Imagem} width="1000" alt='Oi'/>
        <Actions>
          <div>
            <Like/>
            <Comments/>
          </div>
          <Save />
        </Actions>
      </CardBody>
    </Card>
  )
}

export default PostCard
