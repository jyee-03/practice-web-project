export default function HomePage() {
    return (
    <div className="center-container">
        <h1 className="title">About me</h1>
        <div  className="text-box">
            <h2>Jordan Yee</h2>
            <div>
                <img src="cool pic of me.jpg" className="profile-pic" />
            </div>
            <div>
                <p><b>Age:</b> 21</p>
                <p><b>Nationality:</b> Hong Kong, New Zealand, USA</p>
                <p><b>Degree:</b> Bachelor of Commerce/Bachelor of Science Conjoint</p>
                <p><b>Zodiac sign:</b> Libra &#x264e;</p>
                <p><b>Interests: </b> weightlifting, tennis, board games, travelling, food</p>
                <p><b>Random facts:</b></p>
                <ul>
                    <li>I was born in Hong Kong</li>
                    <li>I visited over 20 countries</li>
                    <li>I was the South Island High School Chess Champion</li>
                    <li>I am an elite Hearthstone player (Legend rank in Asia)</li>
                    <li>I watched the second Avatar film four times in movie theatres</li>
                    <li>I never broke a bone (knock on wood!)</li>
                    <li>I have a younger brother who also studies at UoA</li>
                </ul>
                <p><b>Favourite website: </b><a href='https://wikipedia.org'>Wikipedia</a> because I like going down rabbit holes.</p>
            </div>            
        </div>
    </div>
    );
}