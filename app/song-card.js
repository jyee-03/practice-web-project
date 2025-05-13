import React, { useRef, useState } from 'react';
import './song-card.css';

const SongCard = ({ imageSrc, audioSrc, title, author }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className="song-title">"{title}"</h2>
      <h3 className="song-author-text">by {author}</h3>
      <div className="song-card">
        <img src={imageSrc} alt={title} className="song-photo" />
        <img src="vinyl record.png" alt="Vinyl record" className="vinyl" />
        <audio ref={audioRef} src={audioSrc} />
      </div>
    </div>
  );
};

export default SongCard;