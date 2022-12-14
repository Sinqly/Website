/* eslint @typescript-eslint/no-empty-interface: "off" */
import React from 'react'
import PeopleSVG from '../assets/Images/Login/people.svg'

import {
  Main,
  SectionLeft,
  Texts,
  SectionRight,
  NoAccount,
} from '../styles/pages/SignInSignUp'

import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Link from 'next/link'

interface loginProps {}

const Login: React.FC<loginProps> = () => {
  return (
    <>
      <Header headerType={'SignInSignUp'} />
      <Main>
        <SectionLeft className={'section-left'}>
          <div style={{ width: '80%' }}>
            <PeopleSVG />
          </div>
          <Texts>
            <h3>Login!</h3>
            <p>
              Acesse com sua conta Sinqly e recebe todos os recursos da
              plataforma!
            </p>
          </Texts>
        </SectionLeft>

        <SectionRight className={'section-right'}>
          <LoginForm />
          <NoAccount>
            Ainda não possui conta? <Link href={'/register'}>Cadastre-se</Link>
          </NoAccount>
        </SectionRight>
      </Main>
    </>
  )
}

export default Login
