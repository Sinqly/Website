import styled from 'styled-components'
import { IoHomeSharp } from 'react-icons/io5'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BsFillBellFill } from 'react-icons/bs'

export const Container = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: right;
`

export const HomeIcon = styled(IoHomeSharp)`
  width: 32px;
  height: 32px;
  margin-right: 20px;

  color: var(--dark-purple);

  &:hover {
    cursor: pointer;
  }
`

export const BellIcon = styled(BsFillBellFill)`
  width: 32px;
  height: 28px;
  margin-right: 20px;

  color: var(--dark-purple);

  &:hover {
    cursor: pointer;
  }
`

export const UserIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 100%;

  background-color: var(--dark-purple);
`

export const UserPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserName = styled.div`
  color: var(--dark-purple);
  font-size: 20px;
  font-weight: 400;
`

export const DropdownIcon = styled(IoMdArrowDropdown)`
  width: 30px;
  height: 30px;
  color: var(--dark-purple);
`
