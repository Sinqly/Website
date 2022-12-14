import styled from 'styled-components'
import { active } from '../../utils/Header/activeInterface'
import { FaArrowLeft } from 'react-icons/fa'

export const IndexContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 32px 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  background-color: var(--white);

  @media screen and (max-width: 1024px) {
    #menu {
      display: none;
    }

    #botao-mobile {
      display: block;
    }

    #menu {
      display: block;
      position: absolute;
      width: 100vw;
      top: 100px;
      right: 0;
      background-color: var(--white);
      z-index: 1000;
      height: 0px;
      transition: 0.8s all;
      visibility: hidden;
      overflow-y: hidden;
      border-top: 0.1px solid #d7d7d7;
    }

    #menu li {
      padding: 1rem 0;
      margin: 0 1rem 0 3rem;
      border-bottom: 2px solid #6a6da62a;
    }

    #menu li a {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 550px) {
    & {
      padding: 16px 24px;
    }
    & > nav {
      width: 30%;
    }
    .button-space {
      display: none;
    }
    & .logo-space {
      width: 70%;
      justify-content: left;
    }
  }
`

export const MobileButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: none;
  display: none;

  #hamburguer {
    display: block;
    border-top: 2px solid;
    width: 20px;
    color: var(--light-purple);
  }

  #hamburguer::after,
  #hamburguer::before {
    content: '';
    display: block;
    border-top: 2px solid currentColor;
    width: 20px;
    background-color: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }

  & :hover {
    cursor: pointer;
  }
`

export const Nav = styled.nav`
  width: 33%;
  ${({ active }: active) =>
    active
      ? `
    #hamburguer{
      border-top-color: transparent;
    }
  
    #hamburguer::before{
      transform: rotate(135deg);
    }
  
    #hamburguer::after{
      transform: rotate(-135deg);
      top: -7px;
    }   

    #menu{
      height: calc(100vh - 10vh);
      visibility: visible;
      overflow-y: auto;
    }
  `
      : ''}
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  & > li {
    margin-right: 16px;
  }

  & > li > a {
    color: var(--dark-purple);
    text-decoration: none;
  }
`

export const LogoSpace = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  min-width: 150px;
`

export const ButtonSpace = styled.div`
  width: 33%;
  display: flex;
  justify-content: right;
`

export const ButtonLogin = styled.button`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--dark-purple);
  border-radius: 32px;
  border: none;

  &:hover {
    background-color: #3d1b74;
    cursor: pointer;
  }
`

export const SignInSignUpContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  background-color: var(--white);

  & .arrow-left {
    display: none;
  }

  @media screen and (max-width: 550px) {
    & .back {
      left: 16px;
    }
    & .arrow-left {
      display: block;
    }
    & .go-back-link {
      display: none;
    }
  }
`
export const ImageView = styled.div`
  position: absolute;
  width: 180px;
`

export const Back = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 48px;

  & > a {
    text-decoration: none;
    font-size: 18px;
    color: var(--dark-purple);
  }
`

export const ArrowLeft = styled(FaArrowLeft)`
  width: 24px;
  height: 24px;
  color: var(--dark-purple);
`

export const ContainerGeneral = styled.div`
  width: 100%;
  height: 100px;
  padding: 32px 16px 32px 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;

  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  background-color: var(--white);

  @media screen and (max-width: 1024px) {
    & {
      padding: 32px 16px;
    }

    .icons-user {
      display: none;
    }
  }
  @media screen and (max-width: 864px) {
    .user-icon {
      margin: 0;
    }
    .hidden {
      display: none;
    }

    #botao-mobile {
      display: block;
      padding: 0;
    }
  }
  @media screen and (max-width: 380px) {
    & {
      padding: 16px 8px 16px 8px;
    }
  }
`

export const InputDiv = styled.div`
  width: 33%;

  ${({ active }: active) =>
    active
      ? `
    #hamburguer{
      border-top-color: transparent;
    }
  
    #hamburguer::before{
      transform: rotate(135deg);
    }
  
    #hamburguer::after{
      transform: rotate(-135deg);
      top: -7px;
    }   

    #menu{
      height: calc(100vh - 10vh);
      visibility: visible;
      overflow-y: auto;
    }
  `
      : ''}
`

export const ImageDiv = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  min-width: 150px;
`
