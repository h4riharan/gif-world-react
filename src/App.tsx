import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const App: React.FC = () => {
  const [gifs, setGifs] = useState<any[]>([]);

  const handleSearch = async (keyword: string) => {
    if (!keyword) {
      setGifs([]);
      return;
    }
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(keyword)}`;
      const response = await fetch(url);
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      setGifs([]);
    }
  };

  return (
    <div className="App app-bg">
      <header className="app-header">
        <h1 className="app-title">GIF World</h1>
        <p className="app-subtitle">Find and enjoy trending GIFs instantly!</p>
      </header>
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        <GifList gifs={gifs} />
      </main>
      <footer className="app-footer">
        <span>Developer by h4ri</span>
      </footer>
    </div>
  );
};

export default App;
