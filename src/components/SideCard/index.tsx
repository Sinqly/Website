/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from 'react'
import Image from 'next/image'

import {
  Container,
  SideCardHeader,
  SideCardTitle,
  SideCardImage,
  Informations,
  Place,
} from './styles'
import Careca from '../../assets/Images/Feed/Careca.png'
import { useUserContext } from '../../context/UserContext'
import { User } from '../../utils/UserInterface'

export const SideCardHome = () => {
  const { UserInfo } = useUserContext()

  console.log(UserInfo);
  
  return (
    <Container className="sideCard">
      <SideCardHeader>
        <SideCardTitle>
          {UserInfo?.name} {UserInfo?.lastName}
          <span>Desenvolvedor Fullstack</span>
        </SideCardTitle>
        <SideCardImage>
          {
            UserInfo?.profileImage ? (
              <Image src={UserInfo?.profileImage!} width={1000} height={1000} alt="Foto do usuário" />
            ) : <Image src={Careca} width={1000} height={1000} alt="Foto do usuário" />
          }
          
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
    </Container>
  )
}

interface SideCardVisitantInterface {
  user: User
}

export const SideCardVisitant: React.FC<SideCardVisitantInterface> = ({
  user,
}) => {
  
  return (
    <Container className="sideCard">
      <SideCardHeader>
        <SideCardTitle>
          {user.name} {user.lastName}
          <span>Desenvolvedor Fullstack</span>
        </SideCardTitle>
        <SideCardImage>
          {
            user.profileImage ? (
              <Image src={user.profileImage} width={1000} height={1000} alt="Foto do usuário" />
            ) : <Image src={Careca} width={1000} height={1000} alt="Foto do usuário" />
          }
        </SideCardImage>
      </SideCardHeader>

      <hr />

      <Informations>
        <Place>
          <p>Principal Idioma:</p>
          <span>Português</span>
        </Place>
        <Place>
          <p>Localização:</p>
          <span>Florianópolis</span>
        </Place>
        <Place>
          <p>Idade:</p>
          <span>17 anos</span>
        </Place>
        <Place>
          <p>Portfólio</p>
          <span className="destaque">My Portfolio</span>
        </Place>
        <Place>
          <p>Instituição</p>
          <span>Escola S</span>
        </Place>
      </Informations>

      <hr />

      <Informations>
        <Place>
          <p>Go To Profile</p>
          <span>6h and 30 min</span>
        </Place>
      </Informations>
    </Container>
  )
}
