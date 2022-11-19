import styled from 'styled-components'

import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { FaRegComment, FaRegFlag } from 'react-icons/fa'


export const Container = styled.div`
  display: grid;

  grid-template-columns: 27% auto 300px;
  grid-template-rows: 100%;
  grid-template-areas: 
    'SideCard Content UserList'
  ;

  position: absolute;
  top: 100px;

  width: 100vw;
  height: calc(100%);

  @media screen and (max-width: 1200px){
    grid-template-columns: 30% 70%;
    grid-template-areas: 
      'SideCard Content'
      'Empty    Content'
    ;

    .sideCard{
      width: 30%;
    }

    .userList{
      display: none;
    }

    .card{
      min-width: 0;
      width: 90%;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 865px){
    grid-template-columns: 100%;
    grid-template-areas: 
      'Content'
      'Content'
    ;

    .sideCard{
      display: none;
    }
    
    .card{
      min-width: none;
    }
  }

  @media screen and (max-width: 650px){
    top: 70px;

    .texts{
      font-size:1.5rem;
      margin-left: 10px;
    }

    .card{
      width: 100%;
    }

    .cardBody{
      gap: 5px;
    }
  }
`


export const EMPTY = styled.div`
  grid-area: Empty;
`

/* SIDE CARD STYLES */

export const SideCard = styled.div`
  grid-area: SideCard;
  position: fixed;
  top: 150px;
  left: 2%;
  
  font-size: 0.8em;

  width: 25%;
  padding: 40px 3% 100px 3%;
  border-radius: 5%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  hr{
    height: 3px;
    width: 100%;
    background-color: var(--dark-purple);
    border-radius: 100px;
    border: none;
    margin: 22.5px 0;
  }
  
  -webkit-box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  ` 

export const SideCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SideCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
`

export const SideCardImage = styled.div`
  width: 30%;
  img{
    border-radius: 100%;
  }
`
export const Informations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
`

export const Place = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & > p {
    font-weight: bold;
    font-family: 'Poppins';
    color: var(--light-grey);
  }
  & > span {
    margin-left: 15px;
  }

`

/* END SIDE CARD STYLES */


/* CONTENT STYLES */

export const Content = styled.div`
  grid-area: Content;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  width: 70%;
  margin-top: 30px;
  padding: 25px;
  min-width: 550px;
`

export const CardHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
`

export const UserImage = styled.div`
  width: 40%;
  max-width: 80px;
  max-height: 80px;
  border-radius: 100%;

  img{
    border-radius: 100%;
  }
`

export const Texts = styled.div`
  margin-left: 30px;
`

export const Nome = styled.a`
  color: var(--black);
  font-weight: bold;
`

export const Username = styled.div`
  color: var(--grey);
`

export const CardBody = styled.div`
  margin-top: 3%;

  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: justify;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 0 2%;

  & > div {
    display: flex;
    align-items: center;
    min-width: 80px;
  }
`

export const NotLike = styled(FcLikePlaceholder)`
  width: 35%;
  height: 35%;
`

export const Like = styled(FcLike)`
  width: 50%;
  height: 50%;
` 

export const Comments = styled(FaRegComment)`
  width: 50%;
  height: 50%;
  margin-left: 16px;
`

export const Save = styled(FaRegFlag)`
  width: 30px;
  height: 30px;
  margin-left: 16px;
`

/* END CONTENT STYLES */


/* USER LIST STYLES */

export const UserList = styled.div`
  grid-area: UserList;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  
  position: fixed;
  right: 0;
  height: 100%;
  padding: 1.5% 1.5% 8% 1.5%;
  width: 300px;

  .offline{
    margin-top: 24px;
  }

  & > h2{
    margin: 16px 0 24px 0;
  }

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  &::-webkit-scrollbar-track {
      background-color: var(--light-purple);
  }
  &::-webkit-scrollbar-thumb {
      background-color: var(--dark-purple);
  }         /* "auto" or "thin" */
`

export const Users = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const UserCard = styled.div`
  height: 3%;

  display: flex;
  align-items: center;
  gap: 3%;
`

export const Avatar = styled.div`
  height: 48px;
  width: 48px;
  position: relative;
  img{
    height:100%;
    width:100%;
    border-radius:100%;
  }
`

export const Name = styled.div`
  
`

export const Online = styled.div`
  height: 17px;
  width: 34%;
  
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 100%;
  background: #68ea1c;
`


/* END USER LIST STYLES */

