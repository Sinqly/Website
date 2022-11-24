/* eslint @typescript-eslint/no-empty-interface: "off" */
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import * as yup from 'yup'
import {
  Button,
  ButtonDiv,
  EmailIcon,
  Input,
  InputField,
  InputGroup,
  PasswordIcon,
  UserIcon,
  InputAndError,
  ArrowRight,
} from './styles'

interface formProps {}

const RegisterForm: React.FC<formProps> = () => {
  const NameAndSurnameRegex = /^[a-z ,.'-]+$/i

  const yupValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .matches(NameAndSurnameRegex, 'Nome inválido'),

    lastName: yup
      .string()
      .required('Sobrenome obrigatório')
      .matches(NameAndSurnameRegex, 'Sobrenome inválido'),

    email: yup.string().email('Email inválido!').required('Email obrigatório'),

    password: yup
      .string()
      .min(6, 'Minimo de 6 caracteres')
      .required('Senha obrigatória'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas não correspondem')
      .required('Confirme sua senha'),
  })

  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const router = useRouter()

  const handleSubmitForm = (props): void => {
    localStorage.setItem('registerFirstData', JSON.stringify(props))
    router.push('/register/continue')
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 557 }}>
          <InputGroup>
            <div>
              <InputField className="double">
                <InputAndError>
                  <InputField>
                    <UserIcon onClick={() => handleFocusInput('inputName')} />
                    <Input
                      type="text"
                      name="name"
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={handleChange}
                      placeholder={'Nome'}
                      id={'inputName'}
                    />
                  </InputField>
                  <small className="error">
                    {errors.name && touched.name && errors.name}
                  </small>
                </InputAndError>
                <InputAndError>
                  <InputField>
                    <UserIcon
                      onClick={() => handleFocusInput('inputLastName')}
                      className={'input-right'}
                    />
                    <Input
                      type="text"
                      name="lastName"
                      onBlur={handleBlur}
                      value={values.lastName}
                      onChange={handleChange}
                      placeholder={'Sobrenome'}
                      id={'inputLastName'}
                    />
                  </InputField>
                  <small className="error">
                    {errors.lastName && touched.lastName && errors.lastName}
                  </small>
                </InputAndError>
              </InputField>
            </div>

            <InputAndError>
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
            </InputAndError>

            <InputAndError>
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
            </InputAndError>

            <InputAndError>
              <InputField>
                <PasswordIcon
                  onClick={() => handleFocusInput('inputConfirmPassword')}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder={'Confirme sua Senha'}
                  id={'inputConfirmPassword'}
                />
              </InputField>
              <small className="error">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </small>
              {/* <Link href={"https://www.google.com.br"}>Esqueceu a senha?</Link> */}
            </InputAndError>
          </InputGroup>

          <ButtonDiv>
            <Button type="submit">
              Continuar
              <ArrowRight />
            </Button>
          </ButtonDiv>
        </form>
      )}
    </Formik>
  )
}

export default RegisterForm
