import styled from 'styled-components'
import Backline from '../../assets/Images/Index/Backline.png'

export const Container = styled.div`
  overflow: hidden;
  scroll-behavior: smooth;
  padding-bottom: 200px;
`

export const WelcomeContainer = styled.div`
  width: 80%;
  min-height: 700px;
  margin: auto;
  margin-top: 100px;
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

  @media screen and (max-width: 992px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SocialContainer = styled.div`
  width: 100%;
  min-height: 500px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0);

  @media screen and (max-width: 992px){
    margin-top: 5rem;
    flex-direction: column-reverse;
  }
`

export const SocialSvgContainer = styled.div`
  min-width: 35%;
  max-width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1600px) {
    margin-top: 5rem;
    min-width: 30%;
    max-width: 30%;
  }

  @media screen and (max-width: 992px) {
    min-width: 60%;
    max-width: 60%;
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
    width: 60%;
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
    div {
      width: 75%;
    }
  }
`
