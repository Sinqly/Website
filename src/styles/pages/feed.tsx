import { MdOutlineSubtitles, MdOutlineDescription } from 'react-icons/md'
import { VscChromeClose } from 'react-icons/vsc'
import { BsUpload } from 'react-icons/bs'

import styled from 'styled-components'
export const Container = styled.div`

  display: grid;

  grid-template-columns: 27% auto 300px;
  grid-template-rows: 100%;
  grid-template-areas: 'SideCard Content UserList';

  position: absolute;
  top: 100px;

  width: 100vw;
  height: 100%;

  .show-modal {
    display: block;
  }

  @media screen and (max-width: 1400px) {
    .sideCard {
      font-size: 0.78rem;
    }
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 30% 70%;
    grid-template-areas:
      'SideCard Content'
      'Empty    Content';

    .sideCard {
      width: 30%;
    }

    .userList {
      display: none;
    }

    .card {
      min-width: 0;
      width: 90%;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-areas:
      'Content'
      'Content';

    .sideCard {
      display: none;
    }

    .card {
      min-width: none;
    }
  }

  @media screen and (max-width: 650px) {
    top: 70px;

    .texts {
      font-size: 1.5rem;
      margin-left: 10px;
    }

    .card {
      width: 100%;
    }

    .cardBody {
      gap: 5px;
    }
  }
`

export const EMPTY = styled.div`
  grid-area: Empty;
`

export const Content = styled.div`
  grid-area: Content;
  width: 70%;
  margin-left: auto;
  padding-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonModalCreate = styled.button`
  border: none;
  background-color: var(--dark-purple);
  color: var(--white);

  outline: none;
  margin-top: 50px;

  width: 80%;
  min-height: 60px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`

export const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50px;
  padding-top: 125px;
  background-color: #00000069;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  position: absolute;
  margin-top: 5%;
  top: 0;
  
  width: 50vw;
  height: 75vh;
  background-color: var(--white);
  z-index: 1000;
  border-radius: 30px;
  border: 3px solid var(--dark-purple);

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.9rem;
  color: var(--white);
`

export const ModalHeader = styled.header`
  width: 100%;
  height: 50px;

  background-color: var(--dark-purple);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8%;

  -webkit-border-top-left-radius: 20px;
  -webkit-border-top-right-radius: 20px;

  span {
    width: 6%;
  }

  span:hover {
    cursor: pointer;
  }
`

export const CloseModalIcon = styled(VscChromeClose)`
  min-width: 30px;
  min-height: 30px;
  width: 100%;
  height: 100%;
  transition: all 200ms;

  &:hover {
    background-color: var(--light-purple);
    padding: 10%;
    border-radius: 10px;
  }
`

export const ModalBody = styled.section`
  height: 100%;
  width: 100%;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  gap: 30px;
`

export const InputField = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  font-size: 1.5rem;
`

export const TitleIcon = styled(MdOutlineSubtitles)`
  width: 15%;
  min-width: 60px;
  height: 100%;
  padding: 18px 6px;

  border: 1px solid var(--dark-purple);
  border-right: 0;
  -webkit-border-top-left-radius: 30px;
  -webkit-border-bottom-left-radius: 30px;
`

export const DescriptionIcon = styled(MdOutlineDescription)`
  width: 15%;
  min-width: 60px;
  height: 100%;
  padding: 18px 6px;

  border: 1px solid var(--dark-purple);
  border-right: 0;
  -webkit-border-top-left-radius: 30px;
  -webkit-border-bottom-left-radius: 30px;
`

export const UploadIcon = styled(BsUpload)`
  height: 400px;
  width: 40px;
  padding: 18px 6px;
`

export const Input = styled.input`
  height: 100%;
  width: 95%;

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

export const ButtonUploadFile = styled.button`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  outline: none;
  border: 1px solid var(--dark-purple);
  border-radius: 30px;

  color: var(--dark-purple);
  background: none;

  padding: 0 6% 0 4%;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`
export const PostButton = styled.button`
  width: 50%;
  height: 100%;
  
  background-color: var(--dark-purple);
  outline: none;
  border: none;
  border-radius: 10px;

  color: var(--white);

  &:hover {
    cursor: pointer;
  }
`
