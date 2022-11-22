import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SideCard;
  position: fixed;
  top: 150px;
  left: 2%;

  font-size: 0.9rem;

  width: 25%;
  padding: 40px 3% 100px 3%;
  border-radius: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    height: 3px;
    width: 100%;
    background-color: var(--dark-purple);
    border-radius: 100px;
    border: none;
    margin: 22.5px 0;
  }

  -webkit-box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
`

export const SideCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SideCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
`

export const SideCardImage = styled.div`
  width: 30%;
  img {
    border-radius: 100%;
  }
`
export const Informations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
`

export const Place = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & > p {
    font-weight: bold;
    font-family: 'Poppins';
    color: var(--light-grey);
  }
  & > span {
    margin-left: 15px;
  }
`
