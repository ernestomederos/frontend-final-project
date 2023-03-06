import { NavLink } from "react-router-dom";
import AlbumDetails from "../components/AlbumDetails";
import songs from "../components/data";

function Mora() {
  const mora = songs[1];

  return (
    <div className="page-container">
      <AlbumDetails album={mora} />
      <nav className="navigation">
                    <div className="navigation-cover">
                        <NavLink className="nav-link" to="/">
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
  );
}

export default Mora;