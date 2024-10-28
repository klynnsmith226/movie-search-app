import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: linear-gradient(135deg, #333, #444);
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  color: #ffffff;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: #cccccc;
  }
`;

const IconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border:none;
  background-color: #6bbda2;  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
    &:hover {
    background-color: #488a74;
  }

  &:active {
    background-color: #488a74;
  }
`;

interface ISearchBarProps {
    onSearch: (searchPhrase: string) => void;
}

function SearchBar({ onSearch }: ISearchBarProps) {
    const [searchPhrase, setSearchPhrase] = useState<string>('');

    const handleSearch = () => {
        if (searchPhrase.trim() === '') return;
        onSearch(searchPhrase);
    };

    return (
        <SearchBarContainer>
            <SearchInput
                type="text"
                placeholder="Search by movie title..."
                value={searchPhrase}
                onChange={(e) => setSearchPhrase(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <IconContainer onClick={handleSearch}>
                <FontAwesomeIcon size="lg" icon={faSearch} color="#ffffff" />
            </IconContainer>
        </SearchBarContainer>
    );
};

export default SearchBar;
