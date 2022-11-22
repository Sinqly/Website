import styled from 'styled-components'

export const Container = styled.div`
  grid-area: UserList;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);

  position: fixed;
  right: 0;
  height: 100%;
  padding: 1.5% 1.5% 8% 1.5%;
  width: 300px;

  .offline {
    margin-top: 24px;
  }

  & > h2 {
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
  }
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
  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`

export const Name = styled.div``

export const Online = styled.div`
  height: 17px;
  width: 34%;

  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 100%;
  background: #68ea1c;
`
