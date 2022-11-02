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

  @media screen and (max-width: 992px) {
    flex-direction: column;
    z-index: 0;
    .section-left {
      width: 100%;
      margin-top: 400px;
      align-items: center;
    }
    .section-right {
      width: 100%;
      align-items: center;
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

export const Texts = styled.div``

export const SectionRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  height: 100%;

  padding: 5%;
`

export const NoAccount = styled.p``
