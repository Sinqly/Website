import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  grid-template-columns: 27% auto 300px;
  grid-template-rows: 100%;
  grid-template-areas: 
    'SideCard Content UserList'
  ;

  position: absolute;
  top: 100px;

  width: 100vw;
  height: 100%;

  @media screen and (max-width: 1400px){
    .sideCard{
      font-size: 0.78rem;
    }
  }

  @media screen and (max-width: 1200px){
    grid-template-columns: 30% 70%;
    grid-template-areas: 
      'SideCard Content'
      'Empty    Content'
    ;

    .sideCard{
      width: 30%;
    }

    .userList{
      display: none;
    }

    .card{
      min-width: 0;
      width: 90%;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 900px){
    grid-template-columns: 100%;
    grid-template-areas: 
      'Content'
      'Content'
    ;

    .sideCard{
      display: none;
    }
    
    .card{
      min-width: none;
    }
  }

  @media screen and (max-width: 650px){
    top: 70px;

    .texts{
      font-size:1.5rem;
      margin-left: 10px;
    }

    .card{
      width: 100%;
    }

    .cardBody{
      gap: 5px;
    }
  }
`


export const EMPTY = styled.div`
  grid-area: Empty;
`

export const Content = styled.div`
  grid-area: Content;

  display: flex;
  flex-direction: column;
  align-items: center;
`