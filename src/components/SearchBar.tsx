import React, { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(input);
        }
    };

    const handleClick = () => {
        onSearch(input);
    };

    return (
        <div className={styles.searchBarContainer}>
            <input
                type="text"
                className={styles.searchInput}
                value={input}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                placeholder="Search GIFs..."
            />
            <button className={styles.searchBtn} onClick={handleClick}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
