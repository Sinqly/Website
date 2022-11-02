import { IoIosLock } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import styled from 'styled-components'

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  margin-bottom: 24px;

  & > div > .error{
    color: red;
  }
`

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  width: 100%;
  padding: 16px 0;

  border: none;
  border-radius: 32px;

  background-color: var(--dark-purple);
  color: var(--white);
`

export const InputField = styled.div`
  height: 48px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--dark-purple);
  &::placeholder {
    color: var(--dark-purple);
  }
`

export const EmailIcon = styled(MdEmail)`
  width: 10%;
  min-width: 60px;
  height: 48px;
  padding: 8px 5px;

  border: none;
  border: 1px solid var(--dark-purple);
  border-right: 0;
  -webkit-border-top-left-radius: 30px;
  -webkit-border-bottom-left-radius: 30px;
`

export const PasswordIcon = styled(IoIosLock)`
  width: 10%;
  min-width: 60px;
  height: 48px;
  padding: 8px 5px;

  border: none;
  border: 1px solid var(--dark-purple);
  border-right: 0;
  -webkit-border-top-left-radius: 30px;
  -webkit-border-bottom-left-radius: 30px;
`

export const Input = styled.input`
  height: 48px;
  width: 90%;
  -webkit-border-top-right-radius: 30px;
  -webkit-border-bottom-right-radius: 30px;
  outline: none;
  border: 1px solid var(--dark-purple);
  border-left: 0;
  background: none;
`

export const StayConnected = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 40px;

  & > input {
    width: 30px;
    height: 30px;
  }
`