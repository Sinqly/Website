/* eslint @typescript-eslint/no-empty-interface: "off" */
import React from 'react'
import RegisterImage from '../../assets/Images/Register/RegisterImage.svg'

import {
  Main,
  SectionLeft,
  SectionRight,
} from '../../styles/pages/SignInSignUp'

import Header from '../../components/Header'
import ContinueRegisterForm from '../../components/ContinueRegisterForm'

interface loginProps {}

const ContinueRegister: React.FC<loginProps> = () => {
  return (
    <>
      <Header headerType={'SignInSignUp'} />
      <Main>
        <SectionLeft className={'section-left'}>
          <ContinueRegisterForm />
        </SectionLeft>

        <SectionRight className={'section-right'}>
          <RegisterImage />
        </SectionRight>
      </Main>
    </>
  )
}

export default ContinueRegister
