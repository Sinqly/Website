import React, { useState } from 'react'
import Image from 'next/image'

import Logo from '../../assets/Images/Logo.png'
import Input from '../Input'

import {
  IndexContainer,
  MobileButton,
  Nav,
  Menu,
  LogoSpace,
  ButtonLogin,
  ButtonSpace,
  ContainerLoginCadastro,
} from './styles'

interface HeaderProps {
  headerType?: string
}

const RenderIndex = () => {
  const [active, setActive] = useState<boolean>(false)

  const toggleMenu = () => {
    if (active === true) setActive(false)
    else setActive(true)
  }

  return (
    <IndexContainer>
      <Nav active={active}>
        <MobileButton id={'botao-mobile'} onClick={toggleMenu}>
          <span id={'hamburguer'}></span>
        </MobileButton>

        <Menu id={'menu'}>
          <li>
            <a href="./">Início</a>
          </li>
          <li>
            <a href="#resume">Resumo</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#areas">Áreas</a>
          </li>
        </Menu>
      </Nav>

      <LogoSpace className={'logo-space'}>
        <Image className={'logo'} src={Logo} alt="Logo" />
      </LogoSpace>

      <ButtonSpace className={'button-space'}>
        <ButtonLogin onClick={() => console.log('OI')}>Login</ButtonLogin>
      </ButtonSpace>
    </IndexContainer>
  )
}

const RenderSignInSignUp = () => {
  return (
    <IndexContainer>
      <Input />
      <Image style={{ width: '20%' }} src={Logo} alt="Logo" />
      <ButtonLogin>voltar</ButtonLogin>
    </IndexContainer>
  )
}

const RenderGeneral = () => {
  return (
    <ContainerLoginCadastro>
      <Input />
      <Image
        style={{ width: '20', justifySelf: 'center' }}
        src={Logo}
        alt="Logo"
      />
      <ButtonLogin>voltar</ButtonLogin>
    </ContainerLoginCadastro>
  )
}

const Header: React.FC<HeaderProps> = ({ headerType = 'General' }) => {
  const HeaderColection = {
    Index: RenderIndex,
    LoginCadastro: RenderSignInSignUp,
    General: RenderGeneral,
  }

  return HeaderColection[headerType as keyof typeof HeaderColection]()
}

export default Header
