import { NavLink } from "react-router-dom";
import AlbumDetails from "../components/AlbumDetails";
import songs from "../components/data";

function AmorSuicida() {
  const amorSuicida = songs[0];

  return (
    <div className="page-container">
      <AlbumDetails album={amorSuicida} />
      <nav className="navigation">
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="mora">
                            <img src={songs[1].cover} alt="mora cover" />
                        </NavLink>
                    </div>
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="/contigo">
                            <img src={songs[2].cover} alt="contigo cover" />
                        </NavLink>
                    </div>
                </nav>
    </div>
  );
}
export default AmorSuicida;