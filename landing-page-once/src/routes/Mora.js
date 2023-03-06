import { NavLink, Outlet } from "react-router-dom";
import songs from "../components/data";
import logo from "../components/logos";


function Mora() {
    const mora = songs[1];

    return (
        <div className="page-container">
            <div className="album-cover">
                <img className="cover-image" src={mora.cover} alt="Mora Album Cover" />
            </div>
            <p className="album-title"> {mora.name} </p>
            <p className="album-artist">by {mora.artist}</p>
            <Outlet />
            <p>Find it here:</p>
            <div class="links-to-music">
                <div class="platform-buttons">
                    <a className="button" href={mora.platforms.Spotify} target="_blank" rel="noreferrer">
                        <img src={logo.Spotify} alt="Spotify Icon" />
                        <span>Spotify</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href={mora.platforms.appleMusic} target="_blank" rel="noreferrer">
                        <img src={logo.AppleMusic} alt="Apple Music Icon" />
                        <span>Apple Music</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href={mora.platforms.YouTube} target="_blank" rel="noreferrer">
                        <img src={logo.YouTube} alt="YouTube Icon" />
                        <span>YouTube</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href={mora.platforms.Amazon} target="_blank" rel="noreferrer">
                        <img src={logo.Amazon} alt="Amazon Icon" />
                        <span>Amazon</span>
                    </a>

                </div>
                <div class="platform-buttons">
                    <a className="button" href={mora.platforms.iTunes} target="_blank" rel="noreferrer">
                        <img src={logo.iTunes} alt="iTunes Icon" />
                        <span>iTunes</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href={mora.platforms.Deezer} target="_blank" rel="noreferrer">
                        <img src={logo.Deezer} alt="Deezer Icon" />
                        <span>Deezer</span>
                    </a>
                </div>
            </div>
            <br />
            <p>Released {mora.year} </p>
            <p className="description"> {mora.description} </p>
            <div>
                <p>More Releases by Once</p>
                <nav className="navigation" >
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="/" >
                            <img src={songs[0].cover} alt="amor suicida cover" />
                        </NavLink>
                    </div>
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="/contigo">
                            <img src={songs[2].cover} alt="contigo cover" />
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Mora;