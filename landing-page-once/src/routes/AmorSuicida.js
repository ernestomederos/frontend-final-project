import { NavLink, Outlet } from "react-router-dom";
import myAmor from "../images/Amor.jpg";
import iTunes from "../logos/itunes.png";
import Spotify from "../logos/spotify.png";
import YouTube from "../logos/youtube.png";
import AppleMusic from "../logos/applemusic.png";
import Amazon from "../logos/amazon.png";
import Deezer from "../logos/deezer.png";

function AmorSuicida() {
    const navigationStyle = {
        marginTop: "2em",
    };

    return (
        <div className="page-container">
            <div className="album-cover">
                <img className="cover-image" src={myAmor} alt="Amor Suicida Album Cover" />
            </div>
            <p className="album-title">Amor Suicida</p>
            <p className="album-artist">by Once</p>
            <Outlet />
                <p>Find it here:</p>
            <div class="links-to-music">
                <div class="platform-buttons">
                    <a className="button" href="https://open.spotify.com/album/3VoUwe8VQUtVJNuQClxPMK">
                        <img src={Spotify} alt="Spotify Icon" />
                        <span>Spotify</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://music.apple.com/de/album/amor-suicida-single/1632895119">
                        <img src= {AppleMusic} alt="Apple Music Icon" />
                        <span>Apple Music</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://music.youtube.com/watch?v=dAmg_WGQ0zE">
                        <img src= {YouTube} alt="YouTube Icon" />
                        <span>YouTube</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://music.amazon.com/albums/B0B5HTSPJD?tag=fndcmpgns-20">
                        <img src= {Amazon}   alt="Amazon Icon" />
                        <span>Amazon</span>
                    </a>
        
                </div>
                <div class="platform-buttons">
                    <a className="button" href="[SPOTIFY_LINK]">
                        <img src= {iTunes} alt="iTunes Icon" />
                        <span>iTunes</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://www.deezer.com/us/album/332169907">
                        <img src= {Deezer} alt="Deezer Icon" />
                        <span>Deezer</span>
                    </a>
                </div>
                

            </div>
               <p>Released 2022</p> 

            <div style={navigationStyle}>
                <p>More Releases by Once</p>
                <nav className="navigation">
                    <NavLink className="nav-link" to="mora">
                        Mora
                    </NavLink>
                    | <br />
                    <NavLink className="nav-link" to="contigo">
                        Contigo
                    </NavLink>
                    | <br />
                </nav>
            </div>
        </div>
    );
}

export default AmorSuicida;