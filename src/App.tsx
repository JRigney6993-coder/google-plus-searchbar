import React, { useState, useEffect, FormEvent, ChangeEvent, KeyboardEvent } from 'react';
import { FaGooglePlusG } from "react-icons/fa";
import useSound from 'use-sound';

import WeatherComponent from './components/WeatherComponent.tsx';
import QuickAccess from './components/QuickAccess.tsx';
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [quote, setQuote] = useState<string>('');
  const [playActive] = useSound(
    './nuhuh.mp3',
    { volume: 1 }
  );

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.error('Error fetching the quote:', error));
  }, []);

  const searchSubmit = () => {
    if (searchTerm) {
      window.open(`http://www.google.com/search?q=${searchTerm}`, '_blank');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchSubmit();
    }
  };

  return (
    <div className="App">
      <WeatherComponent />

      <header className="App-header">
        Google<span>+</span>
        <p className="App-quote">"{quote}"</p>
      </header>

      <div className="Search">
        <form className="Search-form" onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); searchSubmit(); }}>
          <FaGooglePlusG className="Search-icon" />
          <input
            className="Search-input"
            type="text"
            placeholder="Search with Google Plus"
            value={searchTerm}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            onKeyPress={handleKeyPress}
            onClick={()=>{playActive()}}
          />
        </form>
      </div>

      <QuickAccess />

      <iframe className='Spotify'
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/5Nua9mMzVgCl5w8W3X9ree?utm_source=generator&theme=0"
        width="10vw"
        height="152"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default App;
