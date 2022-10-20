import React from 'react'
import {
  BellIcon,
  DropdownIcon,
  HomeIcon,
  Container,
  UserIcon,
  UserName,
  UserPlace,
} from './styles'

export interface UserDropdownProps {
  styles?: object
}

const UserDropdown: React.FC<UserDropdownProps> = ({ styles }) => {
  return (
    <Container style={styles}>
      <div className={'icons-user'}>
        <HomeIcon />
        <BellIcon />
      </div>

      <UserPlace>
        <UserIcon className={"user-icon"} />
        <UserName className={'hidden'}>Igor Ribeiro</UserName>
        <DropdownIcon className={'hidden'} />
      </UserPlace>
    </Container>
  )
}

export default UserDropdown
