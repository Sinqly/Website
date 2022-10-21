import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: auto 64px;

  height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  top: 100px;
`

export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 50%;
  height: 100%;
  padding: 5%;
`

export const Texts = styled.div``

export const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  height: 100%;

  padding: 5%;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  margin-bottom: 24px;
`

export const PasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

export const NoAccount = styled.p``
