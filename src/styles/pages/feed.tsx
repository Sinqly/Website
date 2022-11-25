import { MdOutlineSubtitles, MdOutlineDescription } from 'react-icons/md'
import { VscChromeClose } from 'react-icons/vsc'
import { BsUpload } from 'react-icons/bs'


import styled from 'styled-components'
export const Container = styled.div`
  @import url(//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css);
  @import url(//assets.locaweb.com.br/locastyle/2.0.6/stylesheets/locastyle.css);


  display: grid;

  grid-template-columns: 27% auto 300px;
  grid-template-rows: 100%;
  grid-template-areas: 'SideCard Content UserList';

  position: absolute;
  top: 100px;

  width: 100vw;
  height: 100%;
  
  .show-modal{
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

  &:hover{
    cursor: pointer;
  }
`

export const ModalBackground =  styled.div`
  position: fixed;
  width: 100vw;
  height: calc(100vh - 100px);
  top: 100px;
  background-color: #00000069;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal =  styled.div`
  width: 50vw;
  height: 80vh;
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

export const ModalHeader =  styled.header`
  width: 100%;
  height: 50px;

  background-color: var(--dark-purple);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8%;

  -webkit-border-top-left-radius: 20px;
  -webkit-border-top-right-radius: 20px;

  span{
    width: 6%;
  }

  span:hover{
    cursor: pointer;
  }

`

export const CloseModalIcon =  styled(VscChromeClose)`
  min-width: 30px;
  min-height: 30px;
  width: 100%;
  height: 100%;

  &:hover{
    background-color: var(--light-purple);
    padding: 10%;
    border-radius: 10px;
  }
`

export const ModalBody =  styled.section`
  height: 100%;
  width: 100%;

`

export const InputGroup = styled.div`
  width: 100%;
  height: 100%;

  color: var(--dark-purple);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;

  padding: 2%;
`
export const InputField = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 10%;
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
  width: 85%;
  background: none;

  display: flex;
  align-items: center;
  outline: none;
  border: 1px solid var(--dark-purple);
  border-left: 0;
  
  -webkit-border-top-right-radius: 30px;
  -webkit-border-bottom-right-radius: 30px;
  

  font-size: 1em;
  color: var(--dark-purple);

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
`
export const PostButton = styled.button`
  width: 50%;
  height: 100%;
  background-color: var(--dark-purple);
  outline: none;
  border:none;
  border-radius: 10px;
  color: var(--white);
`

