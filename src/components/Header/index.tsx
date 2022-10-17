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
  ContainerSignInSignUp,
  ContainerGeneral,
  ImageView,
  Back,
  ArrowLeft,
} from './styles'

import Link from 'next/link'

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
            <Link href={'/'}>
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href={'#resume'}>
              <a>Resumo</a>
            </Link>
          </li>
          <li>
            <Link href={'#about'}>
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href={'#areas'}>
              <a>Áreas</a>
            </Link>
          </li>
        </Menu>
      </Nav>

      <LogoSpace className={'logo-space'}>
        <Image className={'logo'} src={Logo} alt="Logo" />
      </LogoSpace>

      <ButtonSpace className={'button-space'}>
        <Link href={'/login'}>
          <ButtonLogin>Login</ButtonLogin>
        </Link>
      </ButtonSpace>
    </IndexContainer>
  )
}

const RenderSignInSignUp = () => {
  return (
    <ContainerSignInSignUp>
      <ImageView>
        <Image className={'logo'} src={Logo} alt="Logo"/>
      </ImageView>
      <Back className='back'>
        <ArrowLeft className={'arrow-left'}/>
        <Link href={'/back'}>
          <a className={'go-back-link'}>Voltar</a>
        </Link>
      </Back>
    </ContainerSignInSignUp>
  )
}

const RenderGeneral = () => {
  return (
    <ContainerGeneral>
      <Input />
      <Image
        style={{ width: '20', justifySelf: 'center' }}
        src={Logo}
        alt="Logo"
      />
      <Link href={'/login'}>
        <ButtonLogin>Login</ButtonLogin>
      </Link>
    </ContainerGeneral>
  )
}

const Header: React.FC<HeaderProps> = ({ headerType = 'General' }) => {
  const HeaderColection = {
    Index: RenderIndex,
    SignInSignUp: RenderSignInSignUp,
    General: RenderGeneral,
  }

  return HeaderColection[headerType as keyof typeof HeaderColection]()
}

export default Header