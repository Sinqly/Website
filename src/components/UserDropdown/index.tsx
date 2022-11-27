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

// import { getUserData } from '../../services/User/getUserData'
import { useUserContext } from '../../context/UserContext'
import Link from 'next/link'

export interface UserDropdownProps {
  styles?: object
}

const UserDropdown: React.FC<UserDropdownProps> = ({ styles }) => {
  const { UserInfo } = useUserContext()
  return (
    <Container style={styles}>
      <div className={'icons-user'}>
        <Link href={'/feed'}>
          <HomeIcon />
        </Link>
        <BellIcon />
      </div>

      <UserPlace>
        <UserIcon className={'user-icon'} />
        <UserName className={'hidden'}>{UserInfo?.name}</UserName>
        <DropdownIcon className={'hidden'} />
      </UserPlace>
    </Container>
  )
}

export default UserDropdown
