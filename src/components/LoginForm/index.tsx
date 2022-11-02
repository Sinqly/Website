/* eslint @typescript-eslint/no-empty-interface: "off" */
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { Button, ButtonDiv, EmailIcon, Input,  InputField, InputGroup, StayConnected, PasswordIcon } from './styles';

interface formProps {}

const LoginForm: React.FC<formProps> = () => {
  
  const yupValidationSchema = yup.object().shape({
    
    email: 
      yup.string()
      .email("Email inválido!")
      .required("Email Obrigatório"),

    password: 
      yup.string()
      .min(8, "A senha deve possuir pelo menos 8 caracteres")
      .required("Senha obrigatória!"),

  });

  const initialValues = { 
    email: "", 
    password: "" 
  }

  const handleSubmitForm = ({ email, password }): void => {
    alert(email + ": " + password);
  }

  return (
    <Formik 
      validateOnBlur={ false } 
      validateOnChange={ false } 
      onSubmit={ handleSubmitForm } 
      initialValues={ initialValues } 
      validationSchema={ yupValidationSchema }
    >
      { // Chave para manipular tsx
        ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <div>
                <InputField>
                  <EmailIcon />
                  <Input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </InputField>
                <small className='error'>{errors.email && touched.email && errors.email}</small>
              </div>
              <div>
                <InputField>
                  <PasswordIcon />
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </InputField>
                <small className='error'>{errors.password && touched.password && errors.password}</small>
              </div>

              <StayConnected>
                <input type="checkbox" name="stayConnected" id="stayConnected" />
                <label>Deseja continuar conectado?</label>
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
};

export default LoginForm;
