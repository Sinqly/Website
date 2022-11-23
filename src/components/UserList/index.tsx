import Image from 'next/image'
import React from 'react'

import { Container, Users, Online, UserCard, Avatar, Name } from './styles'
import Careca from '../../assets/Images/Feed/Careca.png'
import { useUserContext } from '../../context/UserContext'

export interface UserDropdownProps {
  styles?: object
}

const UserList: React.FC<UserDropdownProps> = ({ styles }) => {
  const { UserInfo } = useUserContext()

  const users = () => {
    return (
      <UserCard>
        <Avatar>
          <Image src={Careca} alt="Foto do usuário" />
        </Avatar>
        <Name>{UserInfo?.name}</Name>
      </UserCard>
    )
  }

  return (
    <Container className="userList">
      <Users className="users">
        <h2>Online Connections</h2>
        <UserCard>
          <Avatar>
            <Image src={Careca} alt="Foto do usuário" />
            <Online />
          </Avatar>
          <Name>{UserInfo?.name}</Name>
        </UserCard>
        <UserCard>
          <Avatar>
            <Image src={Careca} alt="Foto do usuário" />
            <Online />
          </Avatar>
          <Name>{UserInfo?.name}</Name>
        </UserCard>
      </Users>
      <Users>
        <h2 className="offline">Offline Connections</h2>

        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
        {users()}
      </Users>
    </Container>
  )
}

export default UserList
