/* eslint @typescript-eslint/no-empty-interface: "off" */
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import * as yup from 'yup'
import { UseSignUpPost } from '../../services/Register/useSignUp'
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
  CalendarIcon,
  PhoneIcon,
} from './styles'

import { storage } from '../../libs/firebase.conf'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

interface formProps {}

const ContinueRegisterForm: React.FC<formProps> = () => {
  const TelephoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/i

  const cpfRegex =
    /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/i

  const yupValidationSchema = yup.object().shape({
    phone: yup
      .string()
      .required('Telefone obrigatório')
      .matches(TelephoneRegex, 'Telefone inválido'),

    birthDate: yup.string().required('Data de nascimento obrigatória'),

    username: yup
      .string()
      .min(3, 'Mínimo de 3 caracteres')
      .required('Username obrigatório'),

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
    phone: '',
    birthDate: '',
    cpf: '',
    biography: '',
    username: '',
    imageUser: '',
  }

  const router = useRouter()
  const [file, setFile] = useState<File>()
  console.log(file)

  const handleSubmitForm = async (props) => {
    if (!file) return
    console.log(props)

    const storageRef = ref(
      storage,
      `images/${new Date().getTime() + '_' + file.name}`
    )

    uploadBytesResumable(storageRef, file)
      .then(() => {
        getDownloadURL(storageRef).then(function (url) {
          localStorage.setItem('imgURLActual', JSON.stringify(url))
          console.log(url)
        })
        localStorage.setItem('registerSecondData', JSON.stringify(props))
      })
      .then(async () => {
        await UseSignUpPost()
        router.push('/feed')
        window.location.reload()
      })
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
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <InputGroup>
            <div>
              <InputField className="double" style={{ gap: '2%' }}>
                <InputAndError>
                  <InputField>
                    <PhoneIcon onClick={() => handleFocusInput('inputPhone')} />
                    <Input
                      type="text"
                      name="phone"
                      onBlur={handleBlur}
                      value={values.phone}
                      onChange={handleChange}
                      placeholder={'Telefone'}
                      id={'inputPhone'}
                      style={{ width: '100%' }}
                    />
                  </InputField>
                  <small className="error">
                    {errors.phone && touched.phone && errors.phone}
                  </small>
                </InputAndError>

                <InputAndError>
                  <InputField>
                    <CalendarIcon
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
                      style={{ width: '100%', padding: ' 0 10px' }}
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
                <UserIcon onClick={() => handleFocusInput('inputUsername')} />
                <Input
                  type="text"
                  name="username"
                  onBlur={handleBlur}
                  value={values.username}
                  onChange={handleChange}
                  placeholder={'Username'}
                  id={'inputUsername'}
                />
              </InputField>
              <small className="error">
                {errors.username && touched.username && errors.username}
              </small>
            </InputAndError>

            <InputAndError style={{ display: 'none' }}>
              <InputField>
                <UserIcon onClick={() => handleFocusInput('inputBirthDate')} />
                <Input
                  type="file"
                  id="imgUser"
                  onChange={(e) => {
                    setFile(e.target.files[0])
                  }}
                />
              </InputField>
              <small className="error">
                {errors.imageUser && touched.imageUser && errors.imageUser}
              </small>
            </InputAndError>

            <InputAndError>
              <InputField>
                <UserIcon onClick={() => handleFocusInput('inputCPF')} />
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
