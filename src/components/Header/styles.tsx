import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 32px 48px;
    background-color:var(--white);

    display:flex;
    align-items: center;
    justify-content:space-between;
`

export const Nav = styled.nav`
    width:0;
`

export const NavList = styled.ul`
    display:flex;
    list-style:none;
    width:100%;

    & > li {
        margin-right: 16px;
    }

    & > li > a {
        color: var(--dark-purple);
        text-decoration:none;
    }
`

export const ButtonLogin = styled.span`
    width:80px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;

    color:var(--white);
    background-color: var(--dark-purple);
    border-radius: 32px;
`

export const ContainerLoginCadastro = styled.div`
    width: 100%;
    height: 100px;
    padding: 32px 48px;
    background-color:var(--white);

    display:flex;
    align-items:center;
`