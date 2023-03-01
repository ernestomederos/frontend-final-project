import { NavLink, Outlet } from "react-router-dom";
import myContigo from "../images/Contigo.png";
import iTunes from "../logos/itunes.png";
import Spotify from "../logos/spotify.png";
import YouTube from "../logos/youtube.png";
import AppleMusic from "../logos/applemusic.png";
import Amazon from "../logos/amazon.png";
import Deezer from "../logos/deezer.png";


function Contigo() {
    const navigationStyle = {
        marginTop: "2em",
    };

    return (
        <div className="page-container">
            <div className="album-cover">
                <img className="cover-image" src={myContigo} alt="Contigo Album Cover" />
            </div>
            <p className="album-title">Contigo</p>
            <p className="album-artist">by Once & Luis Estrada</p>
            <Outlet />
            <p>Find it here:</p>
            <div class="links-to-music">
                <div class="platform-buttons">
                    <a className="button" href="[SPOTIFY_LINK]">
                        <img src={Spotify} alt="Spotify Icon" />
                        <span>Spotify</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="[SPOTIFY_LINK]">
                        <img src= {AppleMusic} alt="Spotify Icon" />
                        <span>Apple Music</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="[SPOTIFY_LINK]">
                        <img src= {YouTube} alt="Spotify Icon" />
                        <span>YouTube</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="[SPOTIFY_LINK]">
                        <img src= {Amazon}   alt="Spotify Icon" />
                        <span>Amazon</span>
                    </a>
        
                </div>
                <div class="platform-buttons">
                    <a className="button" href="[SPOTIFY_LINK]">
                        <img src= {iTunes} alt="Spotify Icon" />
                        <span>iTunes</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="[SPOTIFY_LINK]">
                        <img src= {Deezer} alt="Spotify Icon" />
                        <span>Deezer</span>
                    </a>
                </div>
                

            </div>
               <p>Released 2023</p> 
            <div style={navigationStyle}>
                <p>More Releases by Once</p>
                <nav className="navigation" >
                    <NavLink className="nav-link" to="/mora">
                        Mora
                    </NavLink> | <br />
                    <NavLink className="nav-link" to="/">
                        Amor Suicida
                    </NavLink>
                </nav>
            </div>

        </div>
    )
}

export default Contigo;