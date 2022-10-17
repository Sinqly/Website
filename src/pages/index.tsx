import React from 'react'
import Header from '../components/Header'

import { Container } from '../styles/pages/Index'

const Index: React.FC = () => {
  return (
    <Container>
      <Header headerType={'Index'} />
      <div
        id="resume"
        style={{
          backgroundColor: 'transparent',
          height: '1000px',
          width: '100%',
        }}
      >
        Resume
      </div>
      <div
        id="about"
        style={{ backgroundColor: 'blue', height: '1000px', width: '100%' }}
      >
        About
      </div>
      <div
        id="areas"
        style={{
          backgroundColor: 'yellowgreen',
          height: '1000px',
          width: '100%',
        }}
      >
        Areas
      </div>
    </Container>
  )
}

export default Index
