import Image from 'next/image'
import React from 'react'

import { Card, CardHeader, UserImage, Texts, Nome, Username, CardBody, Actions, Like, Comments, Save, NotLike  } from './styles'

import Careca from '../../assets/Images/Feed/Careca.png'
import Imagem from '../../assets/Images/Feed/imagem_feed.jpg'

const PostCard: React.FC = () => {
  return (
    <Card className='card'>
      <CardHeader>
        <UserImage>
          <Image  src={Careca} alt="Foto do usuário" />
        </UserImage>
        <Texts className='texts'>
          <Nome href='https://www.google.com'>Paulo Battistella</Nome>
          <Username>@pbattistella#2021</Username>
        </Texts>
      </CardHeader>
      <CardBody className='cardBody'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga doloremque quis, obcaecati libero tenetur delectus assumenda sapiente amet, incidunt temporibus perspiciatis iste eligendi aperiam ex magnam voluptatum, iure aut? Cum consectetur similique accusantium aliquid eveniet, quo a at est sapiente nulla fuga, totam nam, illum deserunt molestias dolor ullam quam. Provident! Cum consectetur similique accusantium aliquid eveniet, quo a at est sapiente nulla fuga, totam nam, illum deserunt molestias dolor ullam quam. Provident! Cum consectetur similique accusantium aliquid eveniet, quo a at est sapiente nulla fuga, totam nam, illum deserunt molestias dolor ullam quam. Provident!
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
