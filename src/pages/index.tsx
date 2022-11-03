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
  SocialSvgContainer,
  SocialRightCol,
  FunctionContainer,
  FunctionLeftCol,
  FunctionRightCol,
  LoreAreas,
  CircleSvgContainer,
  AreasContainer,
} from '../styles/pages/Index'
import BackpackSvg from '../assets/Images/Index/Backpack.svg'
import SocialSvg from '../assets/Images/Index/Social.svg'
import GraphSvg from '../assets/Images/Index/Graph.svg'
import Svg1 from '../assets/Images/Index/Group 137.svg'
import Svg2 from '../assets/Images/Index/Group 138.svg'
import Svg3 from '../assets/Images/Index/Group 139.svg'
import Svg4 from '../assets/Images/Index/Group 140.svg'
import Svg5 from '../assets/Images/Index/Group 141.svg'
import Svg6 from '../assets/Images/Index/Group 142.svg'

import CircleSvg from '../assets/Images/Index/Circle.svg'

import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'

interface indexProps {}

const Index: React.FC<indexProps> = () => {
  return (
    <Container>
      <Header headerType="Index" />
      <WelcomeContainer id="resume">
        <TextContainer>
          <h2>Rede social de Portfólios</h2>
          <h4>
            Plataforma que possibilita a conexão de estudante a partir de seus
            projetos e portfólios.
          </h4>
          <p>Faça parte dessa comunidade!</p>
          <SignUpButton>
            <Link href={'/register'}>Cadastre-se</Link>
            <BsArrowRightShort size={32} />
          </SignUpButton>
        </TextContainer>
        <BackpackContainer>
          <BackpackSvg />
        </BackpackContainer>
      </WelcomeContainer>
      <SocialContainer id="about">
        <SocialSvgContainer>
          <SocialSvg />
        </SocialSvgContainer>
        <SocialRightCol>
          <div>
            <h2>Rede para conexão de estudantes</h2>
            <h4>A maior rede de conexão para estudante de todas as escolas</h4>
          </div>
          <div>
            <h2>Compartilhamento de projetos estudantis</h2>
            <h4>A maior rede de conexão para estudante de todas as escolas</h4>
          </div>
        </SocialRightCol>
      </SocialContainer>
      <FunctionContainer>
        <FunctionLeftCol>
          <div>
            <h2>Publique</h2>
            <p>Realize publicações de seus projetos e construa seu portfólio</p>
          </div>
          <div>
            <h2>Compartilhe</h2>
            <p>Compartilhe suas publicações para toda a nossa rede</p>
          </div>
          <div>
            <h2>Visualize</h2>
            <p>Visualize projetos de todos os outros usuários</p>
          </div>
          <div>
            <h2>Conecte-se</h2>
            <p>
              Conecte-se com a rede de sua escola e acesse o que seus colegas
              estão produzindo
            </p>
          </div>
          <div>
            <h2>Comente</h2>
            <p>
              Interaja com outras publicações e usuários através de comentários
            </p>
          </div>
        </FunctionLeftCol>
        <FunctionRightCol>
          <GraphSvg />
        </FunctionRightCol>
      </FunctionContainer>
      <LoreAreas id="areas">
        <CircleSvgContainer>
          <CircleSvg />
        </CircleSvgContainer>
        <AreasContainer>
          <h2>Áreas de conhecimento</h2>
          <div>
            <Svg1 />
            <Svg2 />
            <Svg3 />
            <Svg4 />
            <Svg5 />
            <Svg6 />
          </div>
        </AreasContainer>
      </LoreAreas>
    </Container>
  )
}

export default Index
