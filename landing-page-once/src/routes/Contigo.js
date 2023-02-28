import { NavLink, Outlet } from "react-router-dom";
import myContigo from "../images/Contigo.png";

function Contigo() {
    return (
        <div className="page-container">
           <div className="album-cover">
            <img src={myContigo} alt="" style={{height: "370px", width: "370px", padding: "2em"}}/>
           </div>
           <h2>Contigo</h2>
           <h3>by Once & Luis Estrada</h3>
            <Outlet/>
            <div>
            <h3>Otros lanzamientos de Once</h3>
            <nav className="navigation" >
                <NavLink className="nav-link" to="../mora">Mora</NavLink> | <br />
                <NavLink className="nav-link" to="../">Amor Suicida</NavLink>
            </nav>
            </div>
            
        </div>
    )
}

export default Contigo;