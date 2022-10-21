/* eslint @typescript-eslint/no-empty-interface: "off" */

import * as React from 'react'
import Header from '../components/Header/index'
import {
  Container,
  WelcomeContainer,
  SignUpButton,
  BackpackContainer,
  TextContainer,
  SocialContainer,
} from '../styles/pages/Index'
import BackpackSvg from '../assets/Images/Index/Backpack.svg'
import { BsArrowRightShort } from 'react-icons/bs'

interface indexProps {}

const index: React.FC<indexProps> = (props) => {
  return (
    <Container>
      <Header headerType="Index" />
      <WelcomeContainer>
        <TextContainer>
          <h2>Rede social de Portfólios</h2>
          <h4>
            Plataforma que possibilita a conexão de estudante a partir de seus
            projetos e portfólios.
          </h4>
          <p>Faça parte dessa comunidade!</p>
          <SignUpButton>
            Cadastre-se
            <BsArrowRightShort size={32} />
          </SignUpButton>
        </TextContainer>
        <BackpackContainer>
          <BackpackSvg />
        </BackpackContainer>
      </WelcomeContainer>
      <SocialContainer>
        <h1>teste</h1>
      </SocialContainer>
    </Container>
  )
}

export default index
