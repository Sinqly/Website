/* eslint @typescript-eslint/no-empty-interface: "off" */
import React from 'react'
import PeopleSVG from '../assets/Images/Login/people.svg'

import {
  Main,
  SectionLeft,
  Texts,
  SectionRight,
  NoAccount,
} from '../styles/pages/Login'

import Header from '../components/Header'
import LoginForm from '../components/LoginForm';

interface loginProps {}

const Login: React.FC<loginProps> = ({ ...props }) => {

  return (
    <>
      <Header headerType={'SignInSignUp'} />
      <Main>
        <SectionLeft className={'section-left'}>
          <div style={{ width: '80%', margin: 'auto' }}>
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
          <LoginForm/>
          <NoAccount>
            Ainda não possui conta? <span>Cadastre-se</span>
          </NoAccount>
        </SectionRight>
      </Main>
    </>
  )
}

export default Login;
