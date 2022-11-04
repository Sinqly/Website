import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  scroll-behavior: smooth;
  padding-bottom: 200px;
`

export const WelcomeContainer = styled.div`
  width: 80%;
  padding-top: 100px;
  min-height: 600px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme.colors.text};
`

export const TextContainer = styled.div`
  width: 35%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  h2 {
    width: 75%;
    font-size: 3.2rem;
    color: ${(props) => props.theme.colors.primary};
  }

  h4 {
    width: 70%;
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey};
  }

  @media screen and (max-width: 1280px) {
    width: 50%;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
    margin-top: 10px;
    align-items: center;

    h2,
    h4,
    p {
      width: 80%;
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    h2,
    h4,
    p {
      width: 100%;
    }
  }
`

export const BackpackContainer = styled.div`
  min-width: 35%;
  max-width: 35%;
  max-height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: right;

  @media screen and (max-width: 1600px) {
    min-width: 40%;
    max-width: 40%;
  }

  @media screen and (max-width: 992px) {
    min-width: 80%;
    max-width: 80%;
    min-height: 25vh;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    min-width: 90%;
    max-width: 90%;
  }
`

export const SignUpButton = styled.button`
  width: 75%;
  margin-top: 1.2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border: 0;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.whiteText};

  a {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.whiteText};
  }

  @media screen and (max-width: 992px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SocialContainer = styled.div`
  margin: auto;
  padding-top: 100px;
  margin-top: 5.5rem;
  width: 80%;
  min-height: 500px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0);

  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
  }
`

export const SocialSvgContainer = styled.div`
  min-width: 30%;
  max-width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1600px) {
    margin-top: 5rem;
    min-width: 40%;
    max-width: 40%;
  }

  @media screen and (max-width: 992px) {
    min-width: 75%;
    max-width: 75%;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    min-width: 70%;
    max-width: 70%;
  }
`

export const SocialRightCol = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    margin: 1vw 0;
  }

  div h2 {
    font-size: 2.4rem;
    color: var(--dark-purple);
    margin-bottom: 1rem;
  }

  div h4 {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: column-reverse;
  }
`

export const FunctionContainer = styled.section`
  padding-top: 100px;
  margin-top: 5.5rem;
  width: 100%;
  min-height: 60vh;
  background-color: var(--dark-purple);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 0 7.5%;
  }
`

export const FunctionLeftCol = styled.div`
  width: 35%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--white);
  h2 {
    font-size: 2rem;
  }
  p {
    color: var(--light-grey);
    font-size: 1rem;
  }

  @media screen and (max-width: 992px) {
    width: 75%;
    h2 {
      text-align: right;
    }
    p {
      text-align: right;
    }
    margin-bottom: 2.8rem;
  }
`

export const FunctionRightCol = styled.div`
  width: 45%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 75%;
  }

  @media screen and (max-width: 1600px) {
    svg {
      width: 90%;
    }
  }

  @media screen and (max-width: 992px) {
    svg {
      width: 100%;
    }
    width: 65%;
    height: auto;
    margin-bottom: 2.8rem;
  }
`

export const LoreAreas = styled.section`
  margin-top: 5.5rem;
  padding: 0 15%;
  padding-top: 30px;
  width: 100%;
  min-height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 992px) {
    padding: 0 7.5%;
  }
`

export const CircleSvgContainer = styled.div`
  width: 20%;
  position: absolute;
  left: 0;
  top: 17.5%;
  z-index: -1;

  @media screen and (max-width: 1600px) {
    width: 25%;
  }

  @media screen and (max-width: 992px) {
    width: 30%;
    top: 25%;
  }

  @media screen and (max-width: 768px) {
    width: 35%;
    top: 30%;
  }

  @media screen and (max-width: 575px) {
    width: 50%;
    top: 25%;
  }

  @media screen and (max-width: 425px) {
    width: 65%;
    top: 27.5%;
  }
`

export const AreasContainer = styled.div`
  margin-top: 5.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    text-align: center;
    font-size: 3.2rem;
    color: var(--dark-purple);
    margin-bottom: 2.5rem;
  }

  div {
    width: 100%;
    min-height: 550px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  div > svg {
    margin: 2% 5%;
    flex: 0 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1600px) {
    div > svg {
      flex: 0 22.5%;
    }
  }

  @media screen and (max-width: 992px) {
    div > svg {
      flex: 0 25%;
    }
  }

  @media screen and (max-width: 768px) {
    div > svg {
      flex: 0 30%;
    }
  }

  @media screen and (max-width: 656px) {
    div > svg {
      flex: 0 35%;
    }
  }

  @media screen and (max-width: 575px) {
    div > svg {
      margin: 0;
      flex: 0 40%;
    }
  }

  @media screen and (max-width: 425px) {
    div {
      justify-content: center;
    }
    div > svg {
      margin: 2rem 2rem;
      flex: 0 45%;
    }
  }
`

export const RegisterContainer = styled.section`
  width: 80%;
  margin: auto;
  padding-top: 125px;

  h2{
    font-size: 2.4rem;
    color: var(--dark-purple);
  }

  button{
    width: 40%;
  }

  @media screen and (max-width: 768px){
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    button{
      width: 75%;
    }
  }

  @media screen and (max-width: 575px){
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    button{
      width: 90%;
    }
  }
`