/* eslint @typescript-eslint/no-empty-interface: "off" */
import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { UseSignInPost } from '../../services/Login/useSignIn'
import {
  Button,
  ButtonDiv,
  EmailIcon,
  Input,
  InputField,
  InputGroup,
  StayConnected,
  PasswordIcon,
} from './styles'

import { UserInfoSignIn } from '../../utils/Login/UserSign'
import { useRouter } from 'next/router'

interface formProps {}

const LoginForm: React.FC<formProps> = () => {
  const yupValidationSchema = yup.object().shape({
    email: yup.string().email('Email inválido!').required('Email Obrigatório'),
    password: yup
      .string()
      .min(3, 'A senha deve possuir pelo menos 6 caracteres')
      .required('Senha obrigatória!'),
  })

  const initialValues = {
    email: '',
    password: '',
  }

  const router = useRouter()
  const handleSubmitForm = (data: UserInfoSignIn) => {
    UseSignInPost(data)
    setTimeout(() => {
      router.push('/feed')
    }, 2000)
  }

  const handleFocusInput = (id: string): void => {
    document.getElementById(id)?.focus()
  }

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmitForm}
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
    >
      {
        // Chave para manipular tsx
        ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{ width: '100%', maxWidth: 557 }}
          >
            <InputGroup>
              <div>
                <InputField>
                  <EmailIcon onClick={() => handleFocusInput('inputEmail')} />
                  <Input
                    type="text"
                    name="email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    placeholder={'Insira seu E-mail'}
                    id={'inputEmail'}
                  />
                </InputField>
                <small className="error">
                  {errors.email && touched.email && errors.email}
                </small>
              </div>
              <div>
                <InputField>
                  <PasswordIcon
                    onClick={() => handleFocusInput('inputPassword')}
                  />
                  <Input
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    placeholder={'Insira sua Senha'}
                    id={'inputPassword'}
                  />
                </InputField>
                <small className="error">
                  {errors.password && touched.password && errors.password}
                </small>
                {/* <Link href={"https://www.google.com.br"}>Esqueceu a senha?</Link> */}
              </div>

              <StayConnected>
                <input
                  type="checkbox"
                  name="stayConnected"
                  id="stayConnected"
                />
                <label htmlFor="stayConnected">
                  Deseja continuar conectado?
                </label>
              </StayConnected>
            </InputGroup>

            <ButtonDiv>
              <Button type="submit">Logar</Button>
            </ButtonDiv>
          </form>
        )
      }
    </Formik>
  )
}

export default LoginForm
