import styled from 'styled-components'

import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { FaRegComment, FaRegFlag } from 'react-icons/fa'


export const Container = styled.div`
  display: grid;
  grid-template-columns: 430px auto 284px;
  grid-template-rows: 568px auto;
  grid-template-areas: 
    'SideCard Content UserList'
    'Empty    Content UserList '
  ;
  width: 100vw;
  height: calc(100%);
`

export const SideCard = styled.div`
  grid-area: SideCard;
  background-color: red;
  position: fixed;
  top: 30%;
  left: 2%;

  width: 350px;
  height: 430px;
` 
export const Content = styled.div`
  grid-area: Content;

  display: flex;
  flex-direction: column;
  align-items: center;

` 
export const UserList = styled.div`
  grid-area: UserList;
  position: sticky;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
`

export const EMPTY = styled.div`
  grid-area: Empty;
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
` 



export const NotLike = styled(FcLikePlaceholder)`
  width: 36px;
  height: 36px;
`

export const Like = styled(FcLike)`
  width: 36px;
  height: 36px;
` 

export const Comments = styled(FaRegComment)`
  width: 30px;
  height: 30px;
  margin-left: 16px;
`

export const Save = styled(FaRegFlag)`
  width: 30px;
  height: 30px;
  margin-left: 16px;
`