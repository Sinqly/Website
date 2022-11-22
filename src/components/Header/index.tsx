import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  IndexContainer,
  MobileButton,
  Nav,
  Menu,
  LogoSpace,
  ButtonLogin,
  ButtonSpace,
  SignInSignUpContainer,
  ContainerGeneral,
  ImageView,
  Back,
  ArrowLeft,
  InputDiv,
  ImageDiv,
} from './styles'

import Logo from '../../assets/Images/Logo.png'
import UserDropdown from '../UserDropdown'
import { InputSearch } from '../Input'

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
    <SignInSignUpContainer>
      <ImageView>
        <Image className={'logo'} src={Logo} alt="Logo" />
      </ImageView>
      <Back className="back">
        <ArrowLeft className={'arrow-left'} />
        <Link href={'/'}>
          <a className={'go-back-link'}>Voltar</a>
        </Link>
      </Back>
    </SignInSignUpContainer>
  )
}

const RenderGeneral = () => {
  const [active, setActive] = useState<boolean>(false)

  const toggleMenu = () => {
    if (active === true) setActive(false)
    else setActive(true)
  }

  const InputStyles = {
    width: '100%',
    minWidth: '150px',
    maxWidth: '500px',
  }

  return (
    <ContainerGeneral>
      <InputDiv className={'input-div'} active={active}>
        <MobileButton id={'botao-mobile'} onClick={toggleMenu}>
          <span id={'hamburguer'}></span>
        </MobileButton>
        <div className={'hidden'}>
          <InputSearch className={'hidden'} styles={InputStyles} />
        </div>
      </InputDiv>

      <ImageDiv>
        <Image src={Logo} alt="Logo" />
      </ImageDiv>

      <UserDropdown />
    </ContainerGeneral>
  )
}

const Header: React.FC<HeaderProps> = ({ headerType }) => {
  const HeaderColection = {
    Index: RenderIndex,
    SignInSignUp: RenderSignInSignUp,
    General: RenderGeneral,
  }

  return HeaderColection[headerType as keyof typeof HeaderColection]()
}

export default Header
