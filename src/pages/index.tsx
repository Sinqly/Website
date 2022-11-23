/* eslint @typescript-eslint/no-empty-interface: "off" */

import React, { useEffect } from 'react'
import IndexPage from './indexPage'
import Feed from './feed'
import { useRouter } from 'next/router'
interface indexProps {}

const Index: React.FC<indexProps> = () => {
  const router = useRouter()
  useEffect(() => {
    let user = localStorage.getItem('loggedStatusVariable')

    if (!!user) {
      router.push('/feed')
    }
  }, [])
  return <IndexPage />
}

export default Index
