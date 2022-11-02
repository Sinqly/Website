import React, { useState, InputHTMLAttributes } from 'react'
import { Container, SearchIcon, SearchInput } from './styles'

interface InputProps extends InputHTMLAttributes<InputProps>{
  inputType?: string
  styles?: object
}

export const InputSearch: React.FC<InputProps> = ({ styles }) => {
  const [searchInput, setSearchInput] = useState<string>('')
  return (
    <Container style={styles}>
      <SearchIcon />
      <SearchInput
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        placeholder="Pesquise"
      />
    </Container>
  )
}

