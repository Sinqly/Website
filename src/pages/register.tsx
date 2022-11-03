/* eslint @typescript-eslint/no-empty-interface: "off" */
import React from 'react'
import RegisterImage from '../assets/Images/Register/RegisterImage.svg'

import {
  Main,
  SectionLeft,
  Texts,
  SectionRight,
  NoAccount,
} from '../styles/pages/SignInSignUp'
import Link from 'next/link'

import Header from '../components/Header'
import RegisterForm from '../components/RegisterForm'

interface loginProps {}

const Register: React.FC<loginProps> = () => {
  return (
    <>
      <Header headerType={'SignInSignUp'} />
      <Main>
        <SectionLeft className={'section-left'}>
          <div style={{ width: '80%' }} className={'hidden'}>
            <RegisterImage />
          </div>
          <Texts>
            <h3 className={'registerTitle'}>Crie uma conta!</h3>
            <p>
              {' '}
              Venha fazer parte de nossa rede. Divulgue seus projetos e faça
              parte dessa comunidade!{' '}
            </p>
          </Texts>
        </SectionLeft>

        <SectionRight className={'section-right'}>
          <RegisterForm />
          <NoAccount>
            Já possui conta? <Link href={'/login'}>Logar</Link>
          </NoAccount>
        </SectionRight>
      </Main>
    </>
  )
}

export default Register
