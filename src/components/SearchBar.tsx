import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: linear-gradient(135deg, #333, #444);
  border-radius: 30px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
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
  caret-color: #007aff;

  &::placeholder {
    color: #cccccc;
  }
`;

const SearchButton = styled.button`
   padding: 0.5rem 1rem;
  border: none;
  background-color: #6bbda2;
  color: #fff;
  font-size: 1rem;
  border-radius: 10%;
  cursor: pointer;

  &:hover {
    background-color: #488a74;
  }

  &:active {
    background-color: #488a74;
  }
`;

const SearchIcon = styled.span`
  color: #ffffff;
  font-size: 1.25rem;
`;

interface ISearchBarProps{
    onSearch: (searchPhrase: string) => void;
}

function SearchBar({onSearch} : ISearchBarProps) {
  const [searchPhrase, setSearchPhrase] = useState<string>('');

  const handleSearch = () => {
    if (searchPhrase.trim() === '') return;
    onSearch(searchPhrase);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for a movie..."
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      {/* replace with search icon later*/}
      <SearchButton onClick={handleSearch}><SearchIcon>⌘</SearchIcon></SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
