import * as React from 'react'

import Svg1 from '../../assets/Images/Index/leaf-circle.svg'
import Svg2 from '../../assets/Images/Index/web-circle.svg'
import Svg3 from '../../assets/Images/Index/monument-circle.svg'
import Svg4 from '../../assets/Images/Index/math-circle.svg'
import Svg5 from '../../assets/Images/Index/laptop-circle.svg'
import Svg6 from '../../assets/Images/Index/carrot-circle.svg'

interface FooterProps {
  footerType?: string
}

const Footer: React.FC<FooterProps> = ({ footerType }) => {
  const Index = () => {
    return (
      <>
        <Svg1 />
        <Svg2 />
        <Svg3 />
        <Svg4 />
        <Svg5 />
        <Svg6 />
      </>
    )
  }
  const Feed = () => {
    return <></>
  }

  const FooterColection = { Index, Feed }

  return FooterColection[footerType as keyof typeof FooterColection]()
}

export default Footer
