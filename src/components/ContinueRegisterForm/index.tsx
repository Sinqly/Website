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
  BiographyInput,
  BiographyInputField,
} from './styles'

interface formProps {}

const ContinueRegisterForm: React.FC<formProps> = () => {
  const TelephoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/i

  const cpfRegex =
    /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/i

  const yupValidationSchema = yup.object().shape({
    telephone: yup
      .string()
      .required('Telefone obrigatório')
      .matches(TelephoneRegex, 'Telefone inválido'),

    birthDate: yup.string().required('Data de nascimento obrigatória'),

    cpf: yup
      .string()
      .required('CPF obrigatório')
      .matches(cpfRegex, 'Cpf inválido'),

    biography: yup
      .string()
      .min(25, 'Minimo de 25 caractres')
      .required('Biografia obrigatória'),
  })

  const initialValues = {
    telephone: '',
    birthDate: '',
    cpf: '',
    biography: '',
  }

  const router = useRouter()

  const handleSubmitForm = (props): void => {
    localStorage.setItem('registerSecondData', JSON.stringify(props))
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
        <form onSubmit={handleSubmit} style={{ width: '100%', minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <InputGroup>
            <div>
              <InputField className="double">
                <InputAndError>
                  <InputField>
                    <UserIcon onClick={() => handleFocusInput('inputTel')} />
                    <Input
                      type="text"
                      name="telephone"
                      onBlur={handleBlur}
                      value={values.telephone}
                      onChange={handleChange}
                      placeholder={'Telefone'}
                      id={'inputTel'}
                    />
                  </InputField>
                  <small className="error">
                    {errors.telephone && touched.telephone && errors.telephone}
                  </small>
                </InputAndError>
                <InputAndError>
                  <InputField>
                    <UserIcon
                      onClick={() => handleFocusInput('inputBirthDate')}
                    />
                    <Input
                      type="date"
                      name="birthDate"
                      onBlur={handleBlur}
                      value={values.birthDate}
                      onChange={handleChange}
                      placeholder={'Data de nascimento'}
                      id={'inputBirthDate'}
                    />
                  </InputField>
                  <small className="error">
                    {errors.birthDate && touched.birthDate && errors.birthDate}
                  </small>
                </InputAndError>
              </InputField>
            </div>

            <InputAndError>
              <InputField>
                <EmailIcon onClick={() => handleFocusInput('inputCPF')} />
                <Input
                  type="text"
                  name="cpf"
                  onBlur={handleBlur}
                  value={values.cpf}
                  onChange={handleChange}
                  placeholder={'Insira seu CPF'}
                  id={'inputCPF'}
                />
              </InputField>
              <small className="error">
                {errors.cpf && touched.cpf && errors.cpf}
              </small>
            </InputAndError>

            <InputAndError>
              <BiographyInputField>
                <BiographyInput
                  name="biography"
                  onBlur={handleBlur}
                  value={values.biography}
                  onChange={handleChange}
                  placeholder={'Insira biografia'}
                  id={'inputBiography'}
                />
              </BiographyInputField>
              <small className="biographyError">
                {errors.biography && touched.biography && errors.biography}
              </small>
            </InputAndError>
          </InputGroup>

          <ButtonDiv>
            <Button type="submit">
              Cadastrar
              <ArrowRight />
            </Button>
          </ButtonDiv>
        </form>
      )}
    </Formik>
  )
}

export default ContinueRegisterForm
