import React, { PropsWithChildren } from 'react'

import { UserProvider } from './UserContext'

interface Props {
  children?: React.ReactNode
}

const GlobalContext: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  )
}

export default GlobalContext
