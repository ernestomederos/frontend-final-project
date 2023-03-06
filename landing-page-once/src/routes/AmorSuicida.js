import { NavLink, Outlet } from "react-router-dom";
import songs from "../components/data";
import logo from "../components/logos";


function AmorSuicida() {
    const amorsuicida = songs[0];
    return (
        <div className="page-container">
            <div className="album-cover">
                <img className="cover-image" src={amorsuicida.cover} alt = 'Amor Suicida Cover ' />
            </div>
            <p className="album-title"> {amorsuicida.name} </p>
            <p className="album-artist">by {amorsuicida.artist}</p>
            <Outlet />
            <p>Find it here:</p>
            <div class="links-to-music">
                <div class="platform-buttons">
                    <a className="button" href={amorsuicida.platforms.Spotify} target="_blank" rel="noreferrer">
                        <img src={logo.Spotify} alt="Spotify Icon" />
                        <span>Spotify</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href={amorsuicida.platforms.appleMusic} target="_blank" rel="noreferrer">
                        <img src={logo.AppleMusic} alt="Apple Music Icon" />
                        <span>Apple Music</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href={amorsuicida.platforms.YouTube} target="_blank" rel="noreferrer">
                        <img src={logo.YouTube} alt="YouTube Icon" />
                        <span>YouTube</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href={amorsuicida.platforms.Amazon} target="_blank" rel="noreferrer">
                        <img src={logo.Amazon} alt="Amazon Icon" />
                        <span>Amazon</span>
                    </a>

                </div>
                <div class="platform-buttons">
                    <a className="button" href={amorsuicida.platforms.iTunes} target="_blank" rel="noreferrer">
                        <img src={logo.iTunes} alt="Spotify Icon" />
                        <span>iTunes</span>
                    </a>
                </div>
                <div class="platform-buttons">
                    <a className="button" href={amorsuicida.platforms.Deezer} target="_blank" rel="noreferrer">
                        <img src={logo.Deezer} alt="Spotify Icon" />
                        <span>Deezer</span>
                    </a>
                </div>
            </div>
            <br />
            <p>Released {amorsuicida.year} </p>
            <p className="description"> {amorsuicida.description} </p>
            <div>
                <p>More Releases by Once</p>
                <nav className="navigation" >
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="/mora" >
                            <img src={songs[1].cover} alt="mora cover" />
                        </NavLink>
                    </div>
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="/">
                            <img src={songs[2].cover} alt="contigo cover" />
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AmorSuicida;