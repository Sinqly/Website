import React from 'react';
import Image from 'next/image';

import Logo from '../../assets/Images/Logo.png'
import Input from '../Input';
import { Container, ContainerLoginCadastro, NavList, Nav, ButtonLogin } from './styles';

interface HeaderProps {
    headerType?: string,
}

const Header: React.FC<HeaderProps> = ({ headerType = "General" }) => {

    const Index = () => {
        return (
            <Container>
                <Nav>
                    <NavList>
                        <li>
                            <a href="./">Início</a>
                        </li>
                        <li>
                            <a href="#resume">Resumo</a>
                        </li>
                        <li>
                            <a href="#about">Sobre</a>
                        </li>
                        <li>
                            <a href="#areas">Áreas</a>
                        </li>
                    </NavList>
                </Nav>
                <Image src={Logo} alt="Logo" />
                <ButtonLogin>Login</ButtonLogin>
            </Container>
        )
    }

    const LoginCadastro = () => {
        return (
            <Container>
                <Input />
                <Image style={{ width: "20%" }} src={Logo} alt="Logo" />
                <ButtonLogin>voltar</ButtonLogin>
            </Container>
        )
    }

    const General = () => {
        return (
            <ContainerLoginCadastro>
                <Input />
                <Image style={{ width: "20", justifySelf:'center' }} src={Logo} alt="Logo" />
                <ButtonLogin>voltar</ButtonLogin>
            </ContainerLoginCadastro>
        )
    }
    
    const RenderHeader = {
        Index,
        LoginCadastro,
        General
    }

    return RenderHeader[headerType as keyof typeof RenderHeader]()
}

export default Header;