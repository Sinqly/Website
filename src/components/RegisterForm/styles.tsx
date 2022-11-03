import styled from 'styled-components'

import { IoIosLock } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { ImArrowRight2 } from 'react-icons/im'

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;

  margin-bottom: 24px;

  & > div {
    text-align: right;
  }

  & > div > a {
    text-decoration: none;
    font-size: 1.3em;
    color: var(--dark-purple);
  }

  .error {
    margin-right: 4%;
    color: red;
  }

  .input-right {
    margin-left: 16px;
  }

  @media screen and (max-width: 992px) {
    .double {
      flex-direction: column;
      width: 100%;
      gap: 25px;
    }
    .double > input {
      width: 100%;
    }
    .input-right {
      margin: 0;
    }
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

  display: flex;
  align-items: center;
  justify-content: center;
`
export const InputAndError = styled.div``

export const InputField = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: stretch;

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

export const UserIcon = styled(FaUserAlt)`
  width: 10%;
  min-width: 60px;
  height: 48px;
  padding: 12px 5px;

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

  font-size: 1em;
  color: var(--dark-purple);

  background: transparent;

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  &::placeholder {
    color: var(--dark-purple);

    @media screen and (max-width: 768px) {
      font-size: 1.3em;
    }
  }
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

  @media screen and (max-width: 768px) {
    font-size: 1.3em;

    & > input {
      width: 20px;
      height: 20px;
    }
  }
`

export const ArrowRight = styled(ImArrowRight2)`
  margin-left: 16px;
`
