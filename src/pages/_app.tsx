import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { useRouter } from 'next/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('loggedStatusVariable')
    if (!!user) {
      router.push('/feed')
    }

    else if(router.pathname === '/feed' && !!!user){
      router.push('/login')
    }
  }, [router])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
