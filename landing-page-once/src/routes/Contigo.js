import { NavLink } from "react-router-dom";
import AlbumDetails from "../components/AlbumDetails";
import songs from "../components/data";

function Contigo() {
  const contigo = songs[2];

  return (
    <div className="page-container">
      <AlbumDetails album={contigo} />
      <nav className="navigation">
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="/">
                            <img src={songs[0].cover} alt="amor suicida cover" />
                        </NavLink>
                    </div>
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="mora">
                            <img src={songs[1].cover} alt="mora cover" />
                        </NavLink>
                    </div>
                </nav>
    </div>
  );
}

export default Contigo;