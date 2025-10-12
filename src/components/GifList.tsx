import React from 'react';

interface GifListProps {
    gifs: any[];
}

const GifList: React.FC<GifListProps> = ({ gifs }) => {
    return (
        <div className="js-container gif-list">
            {gifs.length === 0 ? (
                <div className="no-results">No GIFs found. Try searching for something else!</div>
            ) : (
                gifs.map((gif) => (
                    <div className="gif-card" key={gif.id}>
                        <img
                            src={gif.images.fixed_height.url}
                            alt={gif.title}
                            className="container-image gif-img"
                        />
                        <div className="gif-title">{gif.title || 'Untitled'}</div>
                        <div className="gif-actions">
                            <button
                                className="action-btn"
                                onClick={async () => {
                                    try {
                                        const response = await fetch(gif.images.original.url);
                                        const blob = await response.blob();
                                        const url = window.URL.createObjectURL(blob);
                                        const link = document.createElement('a');
                                        link.href = url;
                                        link.download = `${gif.title || 'gif'}.gif`;
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                        window.URL.revokeObjectURL(url);
                                    } catch (err) {
                                        alert('Failed to download GIF.');
                                    }
                                }}
                            >
                                Download
                            </button>
                            <button
                                className="action-btn"
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: gif.title || 'GIF',
                                            text: 'Check out this GIF!',
                                            url: gif.images.original.url
                                        });
                                    } else {
                                        navigator.clipboard.writeText(gif.images.original.url);
                                        alert('GIF link copied to clipboard!');
                                    }
                                }}
                            >
                                Share
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default GifList;
