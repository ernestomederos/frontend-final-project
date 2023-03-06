import logo from "./logos";

function AlbumDetails({ album }) {
    return (
        <div>
            <div className="album-cover">
                <img className="cover-image" src={album.cover} alt={`${album.name} Album Cover`} />
            </div>
            <p className="album-title">{album.name}</p>
            <p className="album-artist">by {album.artist}</p>
         
            <p>Find it here:</p>
            <div className="links-to-music">
            <div className="platform-buttons">
                    <a className="button" href={album.platforms.Spotify} target="_blank" rel="noreferrer">
                        <img src={logo.Spotify} alt="Spotify Music Icon" />
                        <span>Spotify</span>
                    </a>
                </div>

                <div className="platform-buttons">
                    <a className="button" href={album.platforms.appleMusic} target="_blank" rel="noreferrer">
                        <img src={logo.AppleMusic} alt="Apple Music Icon" />
                        <span>Apple Music</span>
                    </a>
                </div>
                <div className="platform-buttons">
                    <a className="button" href={album.platforms.YouTube} target="_blank" rel="noreferrer">
                        <img src={logo.YouTube} alt="YouTube Icon" />
                        <span>YouTube</span>
                    </a>
                </div>
                <div className="platform-buttons">
                    <a className="button" href={album.platforms.Amazon} target="_blank" rel="noreferrer">
                        <img src={logo.Amazon} alt="Amazon Icon" />
                        <span>Amazon</span>
                    </a>
                </div>
                <div className="platform-buttons">
                    <a className="button" href={album.platforms.iTunes} target="_blank" rel="noreferrer">
                        <img src={logo.iTunes} alt="iTunes Icon" />
                        <span>iTunes</span>
                    </a>
                </div>
                <div className="platform-buttons">
                    <a className="button" href={album.platforms.Deezer} target="_blank" rel="noreferrer">
                        <img src={logo.Deezer} alt="Deezer Icon" />
                        <span>Deezer</span>
                    </a>
                </div>
            </div>
            <br />
            <p>Released {album.year}</p>
            <p className="description">{album.description}</p>
            <div>
                <p>More Releases by Once</p>
                
            </div>
        </div>
    );
}

export default AlbumDetails;