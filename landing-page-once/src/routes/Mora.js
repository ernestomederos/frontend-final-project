import { NavLink, Outlet } from "react-router-dom";
import myMora from "../images/Mora.png";
import iTunes from "../logos/itunes.png";
import Spotify from "../logos/spotify.png";
import YouTube from "../logos/youtube.png";
import AppleMusic from "../logos/applemusic.png";
import Amazon from "../logos/amazon.png";
import Deezer from "../logos/deezer.png";


function Mora() {
    const navigationStyle = {
        marginTop: "2em",
    };

    return (
        <div className="page-container">
            <div className="album-cover">
                <img className="cover-image" src={myMora} alt="" />
            </div>
            <p className="album-title">Mora</p>
            <p className="album-artist">by Once</p>
            <Outlet />
            <p>Find it here:</p>
            <div class="links-to-music">
                <div class="platform-buttons">
                    <a className="button" href="https://open.spotify.com/album/2yAstyd536vKX45e8b3PAl">
                        <img src={Spotify} alt="Spotify Icon" />
                        <span>Spotify</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://music.apple.com/de/album/mora-single/1655478097">
                        <img src={AppleMusic} alt="Apple Music Icon" />
                        <span>Apple Music</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://music.youtube.com/watch?v=X-ctvNXLZ8s">
                        <img src={YouTube} alt="YouTube Icon" />
                        <span>YouTube</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://music.amazon.com/albums/B0BN6HDRNW?tag=fndcmpgns-20">
                        <img src={Amazon} alt="Amazon Icon" />
                        <span>Amazon</span>
                    </a>

                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://music.apple.com/de/album/mora-single/1655478097">
                        <img src={iTunes} alt="iTunes Icon" />
                        <span>iTunes</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href="https://www.deezer.com/us/album/377438557">
                        <img src={Deezer} alt="Deezer Icon" />
                        <span>Deezer</span>
                    </a>
                </div>
            </div>
            <p>Released 2022</p>
            <div style={navigationStyle}>
                <p>More Releases by Once</p>
                <nav className="navigation" >
                    <NavLink className="nav-link" to="../">
                        Amor Suicida
                    </NavLink> | <br />
                    <NavLink className="nav-link" to="../contigo">
                        Contigo
                    </NavLink>
                </nav>
            </div>

        </div>
    )
}

export default Mora;