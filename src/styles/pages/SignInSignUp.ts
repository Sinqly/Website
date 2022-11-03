import styled from 'styled-components'

export const Main = styled.div`
  height: calc(100vh- 100px);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;

  @media screen and (max-width: 1400px) {
    padding: 0 3%;
  }

  @media screen and (max-width: 992px) {
    height: auto;
    flex-direction: column;
    .hidden {
      display: none;
    }
    .section-left {
      width: auto;
      margin-top: 3%;
      align-items: center;
      text-align: center;
      gap: 10px;
    }
    .section-right {
      align-items: center;
      height: 100%;
      width: 100%;
      gap: 50px;
      & > p {
        font-size: 1.3em;
      }
    }
  }
`

export const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 50%;
  height: 100%;
  padding: 5%;
`

export const Texts = styled.div`
  & > h3 {
    font-size: 1.5em;
  }

  & > p {
    color: var(--light-grey);
    font-family: poppins;
    font-size: 1.2em;
  }

  @media screen and (max-width: 992px) {
    .registerTitle {
      font-size: 3.5em;
    }
    & > h3 {
      font-size: 1.8em;
    }

    & > p {
      font-size: 1.4em;
    }
  }
`

export const SectionRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20%;

  width: 50%;
  height: calc(100vh - 100px);
  padding: 5%;
`

export const LoginImage = styled.image`
  width: 80%;
`
export const NoAccount = styled.p`
  font-size: 1.1em;
  align-self: center;
  & > span {
    color: var(--light-purple);
  }
`
