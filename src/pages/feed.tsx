import Image from 'next/image';
import * as React from 'react';

import Careca from '../assets/Images/Feed/Careca.png'
import Imagem from '../assets/Images/Feed/imagem_feed.jpg'
import Header from '../components/Header';
import { Container, SideCard, Content, UserList, Card, CardHeader, UserImage, Texts, Nome, Username, CardBody, Actions, Like, Comments, Save, NotLike } from '../styles/pages/feed';

// interface feedProps {}

const feed: React.FC = () => {
  return (
    <>
      <Header headerType='General' />
      <Container>
        <SideCard>
          Side Card
        </SideCard>
        <Content>
          <Card>
            <CardHeader>
              <UserImage>
                <Image  src={Careca} alt="Foto do usuário" />
              </UserImage>
              <Texts>
                <Nome href='https://www.google.com'>Paulo Battistella</Nome>
                <Username>@pbattistella#2021</Username>
              </Texts>
            </CardHeader>
            <CardBody>
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
          <Card>
            <CardHeader>
              <UserImage>
                <Image  src={Careca} alt="Foto do usuário" />
              </UserImage>
              <Texts>
                <Nome href='https://www.google.com'>Paulo Battistella</Nome>
                <Username>@pbattistella#2021</Username>
              </Texts>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga doloremque quis, obcaecati libero tenetur delectus assumenda sapiente amet, incidunt temporibus perspiciatis iste eligendi aperiam ex magnam voluptatum, iure aut? Cum consectetur similique accusantium aliquid eveniet, quo a at est sapiente nulla fuga, totam nam, illum deserunt molestias dolor ullam quam. Provident! Cum consectetur similique accusantium aliquid eveniet, quo a at est sapiente nulla fuga, totam nam, illum deserunt molestias dolor ullam quam. Provident! Cum consectetur similique accusantium aliquid eveniet, quo a at est sapiente nulla fuga, totam nam, illum deserunt molestias dolor ullam quam. Provident!
              </p>
              <Image src={Imagem} width="1000" alt='Oi'/>
              <Actions>
                <div>
                  <NotLike />
                  <Comments/>
                </div>
                <Save/>
              </Actions>
            </CardBody>
          </Card>
        </Content>

        <UserList>
          <h2>Online Connections</h2>
            
          <h2>Offline Connections</h2>

        </UserList>
      </Container>
    </>
  )
};

export default feed;
