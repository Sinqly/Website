import styled from 'styled-components'
import { BiSearchAlt2 } from 'react-icons/bi'

export const Container = styled.div`
  width: 30%;
  height: 48px;
  padding: 13px;
  max-width: 500px;

  border: 1px solid var(--dark-purple);
  border-radius: 32px;

  display: flex;
  align-items: center;

  color: var(--dark-purple);
`
export const SearchIcon = styled(BiSearchAlt2)`
    margin-right:8px;
    color:var(--dark-purple)
    width:20px;
    height:20px;
`

export const InputSearch = styled.input`
  height: 48px;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
`
