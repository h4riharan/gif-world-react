# GIF World React

Modern, responsive React components for searching and displaying GIFs using the Giphy API.

## Features

- Search GIFs with a beautiful UI
- Download and share GIFs
- Mobile-friendly and dark theme
- Use as individual components or render the full app

## Installation

```bash
npm install gif-world-react
```

## Usage

### Import Components

```tsx
import { SearchBar, GifList, App } from 'gif-world-react';

// Use individual components
<SearchBar onSearch={handleSearch} />
<GifList gifs={gifs} />

// Or render the full app
<App />
```

### API Key

Set your Giphy API key in your environment (if using the full app):

```
VITE_GIPHY_API_KEY=your_api_key_here
```

## Author

Hariharan M (<hariharanmh001@gmail.com>)
