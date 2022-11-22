import Image from 'next/image'
import React from 'react'

import { Container, Users, Online, UserCard, Avatar, Name } from './styles'
import Careca from '../../assets/Images/Feed/Careca.png'

export interface UserDropdownProps {
  styles?: object
}

const UserList: React.FC<UserDropdownProps> = ({ styles }) => {
  const users = () => {
    return (
      <UserCard>
        <Avatar>
          <Image src={Careca} alt="Foto do usuário" />
        </Avatar>
        <Name>Paulo Battistella</Name>
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
          <Name>Paulo Battistella</Name>
        </UserCard>
        <UserCard>
          <Avatar>
            <Image src={Careca} alt="Foto do usuário" />
            <Online />
          </Avatar>
          <Name>Paulo Battistella</Name>
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
