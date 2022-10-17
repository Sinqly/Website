import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Poppins', sans-serif;
  }
  :root{
    --black:#151515;
    --white:#F9F9F9;
    --grey:#252525;
    --dark-purple:#3A3E8C;
    --light-purple:#6A6DA6;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`
