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
      <footer>
        <div>
          <h2>Sinqly</h2>
          <p>
            Sinqly is a system who gives to the students a platform to publish
            they projects. This platform make possibly people connect and
            interact each other.
          </p>
        </div>
        <div>
          <div>
            <h4>Início</h4>
            <p>
              Aqui falamos de maneira mais completa sobre o objetivo da Sinqly
            </p>
          </div>
          <div>
            <h4>Áreas de conhecimento</h4>
            <div>
              <Svg1 />
              <Svg2 />
              <Svg3 />
              <Svg4 />
              <Svg5 />
              <Svg6 />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>Resumo</h4>
            <p>
              Aqui falamos resumidamente sobre o objetivo da Sinqly com uma
              imagem contextualizada de fundo
            </p>
          </div>
          <div>
            <h4>Sobre</h4>
            <p>
              Aqui falamos de maneira mais completa sobre o objetivo da Sinqly
            </p>
          </div>
        </div>
        <h5>©Todos os direitos reservados por Sinqly 2022</h5>
      </footer>
    )
  }
  const Feed = () => {
    return <></>
  }

  const FooterColection = { Index, Feed }

  return FooterColection[footerType as keyof typeof FooterColection]()
}

export default Footer
