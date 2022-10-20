import React, { useState } from 'react'
import { Container, SearchIcon, InputSearch as SearchInput } from './styles'

export interface InputProps {
  inputType?: string
  classNameProps?: string
  styles?: object
}

const Input: React.FC<InputProps> = ({
  inputType = 'Search',
  styles,
  classNameProps,
}) => {
  const [searchInput, setSearchInput] = useState('')

  const Search = () => {
    return (
      <Container className={classNameProps} style={styles}>
        <SearchIcon />
        <SearchInput
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Pesquise"
        />
      </Container>
    )
  }

  const RenderInput = {
    Search,
  }

  return RenderInput[inputType as keyof typeof RenderInput]()
}

export default Input
