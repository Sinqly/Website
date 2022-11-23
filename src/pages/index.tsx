/* eslint @typescript-eslint/no-empty-interface: "off" */

import * as React from 'react'
import IndexPage from './indexPage'
import Feed from './feed'
interface indexProps {}

const Index: React.FC<indexProps> = () => {
  let logged;

  function getStorageValue() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("loggedStatusVariable")
      logged = !!saved
    }
  }

  getStorageValue()

  if (logged) {
    return <Feed />
  } else {
    return <IndexPage />
  }
}

export default Index
