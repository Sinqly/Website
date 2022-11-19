import Image from 'next/image';
import * as React from 'react';

import Careca from '../assets/Images/Feed/Careca.png'
import Imagem from '../assets/Images/Feed/imagem_feed.jpg'
import Header from '../components/Header';
import { Container, SideCard, SideCardHeader, SideCardTitle, SideCardImage, Content, UserList, Card, CardHeader, UserImage, Texts, Nome, Username, CardBody, Actions, Like, Comments, Save, NotLike, UserCard, Users, Avatar, Name, Online, Informations, Place } from '../styles/pages/feed';

// interface feedProps {}

const Feed: React.FC = () => {


  const users = () => {
      return(
    <UserCard>
      <Avatar>
        <Image  src={Careca} alt="Foto do usuário" />
      </Avatar>
      <Name>
        Paulo Battistella
      </Name>
    </UserCard>      
      ) 
  }

  return (
    <>
      <Header headerType='General' />
      <Container>

        <SideCard className='sideCard'>
          <SideCardHeader>
            <SideCardTitle>
              Paulo Battistella
              <span>
                Desenvolvedor Fullstack
              </span>
            </SideCardTitle>
            <SideCardImage>
              <Image src={Careca} alt="Foto do usuário" />
            </SideCardImage>
          </SideCardHeader>

          <hr />

          <Informations>
            <Place>
              <p>Quantas pessoas viram seu perfil?</p>
              <span>99+</span>
            </Place>
            <Place>
              <p>Impressões do seu perfil</p>
              <span>99+</span>
            </Place>
            <Place>
              <p>Tempo de uso do website</p>
              <span>6h and 30 min</span>
            </Place>
          </Informations>

          <hr />

          <Informations>
            <Place>
              <p>Go To Profile</p>
              <span>6h and 30 min</span>
            </Place>
          </Informations>

          

        </SideCard>

        <Content className='content'>
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
          <Card className='card'>
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
        </Content>

        <UserList className='userList'>
            <Users className='users'>
              <h2>Online Connections</h2>
              <UserCard>
                <Avatar>
                  <Image  src={Careca} alt="Foto do usuário" />
                  <Online/>
                </Avatar>
                <Name>
                  Paulo Battistella
                </Name>
              </UserCard>
              <UserCard>
                <Avatar>
                  <Image  src={Careca} alt="Foto do usuário" />
                  <Online/>
                </Avatar>
                <Name>
                  Paulo Battistella
                </Name>
              </UserCard>
            </Users>
          <Users>
            <h2 className='offline'>Offline Connections</h2>
           
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
            {
              users()
            }
          </Users>
        </UserList>
      </Container>
    </>
  )
};

export default Feed;