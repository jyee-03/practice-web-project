"use client";

import SongCard from "../song-card";

export default function AboutPage() {
    return (
        <div className="center-container">
            <h1 className="title">3 Great Songs</h1>
            <div className="songs-container">
                <SongCard title="Yesterday" author="The Beatles" imageSrc="Yesterday.png" audioSrc="Yesterday.mp3" />
                <SongCard title="Songbird" author="Fleetwood Mac"imageSrc="Songbird.png" audioSrc="Songbird.mp3" />
                <SongCard title="Bridge Over Troubled Water" author="Simon & Garfunkel" imageSrc="Bridge Over Troubled Water.png" audioSrc="Bridge Over Troubled Water.mp3" />
            </div>
        </div>
    );
}