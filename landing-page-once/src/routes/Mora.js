import { NavLink, Outlet } from "react-router-dom";
import myMora from "../images/Mora.png";

function Mora() {
    return (
        <div className="page-container">
           <div className="album-cover">
            <img src={myMora} alt="" style={{height: "370px", width: "370px", padding: "2em"}}/>
           </div>
           <h2>Mora</h2>
           <h3>by Once</h3>
            <Outlet/>
            <div>
            <h3>Otros lanzamientos de Once</h3>
            <nav className="navigation" >
            <NavLink className="nav-link" to="../">Amor Suicida</NavLink> | <br />
            <NavLink className="nav-link" to="../contigo">Contigo</NavLink>
            </nav>
            </div>
            
        </div>
    )
}

export default Mora;