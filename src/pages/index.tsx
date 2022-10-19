import * as React from 'react'
import Header from '../components/Header/index'
import { Container } from '../styles/pages/Index'

interface indexProps {}

const index: React.FC<indexProps> = (props) => {
  return (
    <Container>
      <Header headerType="Index" />
    </Container>
  )
}

export default index
