import styled from 'styled-components'

export const Container = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
