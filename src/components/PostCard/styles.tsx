import styled from 'styled-components'

import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { FaRegComment, FaRegFlag } from 'react-icons/fa'

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

  img {
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
  word-wrap: break-word;
  word-break: break-all;
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
