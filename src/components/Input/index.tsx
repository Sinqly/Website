import React, { useState } from 'react';
import { Container, SearchIcon, InputSearch as SearchInput } from './styles';

export interface InputProps {
    inputType?: string,
}

const Input: React.FC<InputProps> = ({inputType = "Search"}) => {
    const [searchInput, setSearchInput] = useState('')

    const Search = () => {
        return (
            <Container>
                <SearchIcon />
                <SearchInput 
                    value={searchInput} 
                    onChange={event => setSearchInput(event.target.value)}
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

export default Input;