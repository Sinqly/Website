import * as React from 'react'
import Image from 'next/image'
import PeopleSVG from '../assets/Images/Login/people.svg'

import {
  Main,
  SectionLeft,
  Texts,
  SectionRight,
  InputGroup,
  PasswordDiv,
  StayConnected,
  Button,
  ButtonDiv,
  NoAccount,
} from '../styles/pages/Login'
import Input from '../components/Input'
import Header from '../components/Header'

/* eslint @typescript-eslint/no-empty-interface: "off" */
interface loginProps {}

const login: React.FC<loginProps> = ({ ...props }) => {
  return (
    <>
      <Header headerType={'SignInSignUp'} />
      <Main>
        <SectionLeft>
          <PeopleSVG />
          <Texts>
            <h3>Login!</h3>
            <p>
              Acesse com sua conta Sinqly e recebe todos os recursos da
              plataforma!
            </p>
          </Texts>
        </SectionLeft>

        <SectionRight>
          <InputGroup>
            <Input styles={{ width: '100%' }} />
            <PasswordDiv>
              <Input styles={{ width: '100%' }} />
              <span>Esqueceu a senha?</span>
            </PasswordDiv>
          </InputGroup>

          <StayConnected>
            <input type="checkbox" name="sadf" id="sdfg" />
            <label>Deseja continuar conectado?</label>
          </StayConnected>

          <ButtonDiv>
            <Button>Logar</Button>
            <NoAccount>
              Ainda não possui conta? <span>Cadastre-se</span>
            </NoAccount>
          </ButtonDiv>
        </SectionRight>
      </Main>
    </>
  )
}

export default login
