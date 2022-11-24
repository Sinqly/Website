import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { useRouter } from 'next/router'
import GlobalContext from '../context'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  // useEffect(() => {
  //   const user = localStorage.getItem('loggedStatusVariable')
  //   if (!!user) {
  //     router.push('/feed')
  //   } else if (router.pathname === '/feed' && !!!user) {
  //     router.push('/')
  //   }
  // }, [router])

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <Component {...pageProps} />
        <GlobalStyle />
      </GlobalContext>
    </ThemeProvider>
  )
}

export default MyApp
