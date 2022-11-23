/* eslint @typescript-eslint/no-empty-interface: "off" */

import * as React from 'react'
import IndexPage from './indexPage'
import Feed from './feed'
interface indexProps {}

const Index: React.FC<indexProps> = () => {
  const logged = true

  if (!!logged) {
    return <IndexPage />
  } else {
    return <Feed />
  }
}

export default Index
