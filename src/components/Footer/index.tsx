import * as React from 'react'

interface FooterProps {
  footerType?: string
}

const Footer: React.FC<FooterProps> = ({footerType}) => {
  const Index = () => {
    return <h1>Sou o Index</h1>
  }
  const Feed = () => {
    return <h1>Sou o Feed</h1>
  }

  const FooterColection = { Index, Feed}

  return FooterColection[footerType as keyof typeof FooterColection]()
}

export default Footer
