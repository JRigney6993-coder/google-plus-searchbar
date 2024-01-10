import './App.css';
import React, { useState } from 'react';
import { FaGooglePlusG } from "react-icons/fa";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchSubmit = (event) => {
    event.preventDefault(); 
    if (searchTerm) {
      window.open(`http://www.google.com/search?q=${searchTerm}`, '_blank');
    }
  };

  return (
    <div className="App">
      <div className="Search">
        <form className="Search-form" onSubmit={searchSubmit}>
          <FaGooglePlusG className="Search-icon" />
          <input
            className="Search-input"
            type="text"
            placeholder="Search with Google Plus"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                searchSubmit(event);
              }
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
