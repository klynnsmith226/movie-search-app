import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'

function App() {

  const searchMovies = (searchPhrase: string) =>{
    console.log(`searching for ${searchPhrase}`);

  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div>
        <SearchBar onSearch={(searchPhrase:string)=>searchMovies(searchPhrase)}/>
      </div>
    </div>
  );
}

export default App;
