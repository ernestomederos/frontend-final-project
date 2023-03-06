import songs from "../data";
import { NavLink } from "react-router-dom";

function Navigation () {
    return (
<div>
        <nav className="navigation">
          {songs.slice(1, 3).map((item) => (
            <div key={item.id} className="navigation-cover">
              <NavLink className="nav-link" to={`/${item.name}`}>
                <img src={item.cover} alt={`${item.name} cover`} />
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    )
}

export default Navigation;