import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Poppins', sans-serif;
  }
  :root{
    --black:#151515;
    --white:#F9F9F9;
    --grey:#6C6C6C;
    --light-grey:#B4BABB;
    --dark-purple:#3A3E8C;
    --light-purple:#6A6DA6;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  @media screen and (min-width: 2000px) {
    html{
      font-size: 115%;
    }
  }

  @media screen and (max-width: 1600px) {
    html{
      font-size: 90%;
    }
  }

  @media screen and (max-width: 1280px) {
    html{
      font-size: 85%;
    }
  }

  @media screen and (max-width: 992px) {
    html{
      font-size: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    html{
      font-size: 75%;
    }
  }

  @media screen and (max-width: 656px) {
    html{
      font-size: 70%;
    }
  }

  @media screen and (max-width: 575px) {
    html{
      font-size: 65%;
    }
  }

  @media screen and (max-width: 375px) {
    html{
      font-size: 55%;
    }
  }
`
