import Image from 'next/image'
import React from 'react'

import {
  Container,
  SideCardHeader,
  SideCardTitle,
  SideCardImage,
  Informations,
  Place,
} from './styles'
import Careca from '../../assets/Images/Feed/Careca.png'
import Igor from '../../assets/Images/Feed/Eu.png'

const SideCardHome = () => {
  return (
    <Container className="sideCard">
      <SideCardHeader>
        <SideCardTitle>
          Paulo Battistella
          <span>Desenvolvedor Fullstack</span>
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
    </Container>
  )
}

const SideCardVisitant = () => {
  return (
    <Container className="sideCard">
      <SideCardHeader>
        <SideCardTitle>
          Igor Ribeiro
          <span>Desenvolvedor Fullstack</span>
        </SideCardTitle>
        <SideCardImage>
          <Image src={Igor} alt="Foto do usuário" />
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

interface SideCardProps {
  sideCardType?: string
}

const SideCard: React.FC<SideCardProps> = ({ sideCardType = 'Home' }) => {
  const SideCardColection = {
    Home: SideCardHome(),
    Visitant: SideCardVisitant(),
  }

  return SideCardColection[sideCardType as keyof typeof SideCardColection]
}

export default SideCard
