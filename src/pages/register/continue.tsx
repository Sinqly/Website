/* eslint @typescript-eslint/no-empty-interface: "off" */
import React from 'react'
import UploadFileImage from '../../assets/Images/Register/vector.png'

import {
  Main,
  SectionLeft,
  SectionRight,
} from '../../styles/pages/SignInSignUp'

import Header from '../../components/Header'
import ContinueRegisterForm from '../../components/ContinueRegisterForm'
import Image from 'next/image'

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
          <Image
            src={UploadFileImage}
            style={{ width: '100%', height: '100%' }}
            onClick={() => document.getElementById('imgUser').click()}
          />
        </SectionRight>
      </Main>
    </>
  )
}

export default ContinueRegister
