import { NavLink, Outlet } from "react-router-dom";
import myAmor from "../images/Amor.jpg";

function AmorSuicida() {
    return (
        <div className="page-container">
           <div className="album-cover">
            <img src={myAmor} alt="" style={{height: "370px", width: "370px", padding: "2em"}}/>
           </div>
           <h2>Amor Suicida</h2>
           <h3>by Once </h3>
            <Outlet/>
            <div>
            <h3>Otros lanzamientos de Once</h3>
            <nav className="navigation" >
                <NavLink className="nav-link" to="mora">Mora</NavLink> | <br />
                <NavLink className="nav-link" to="contigo">Contigo</NavLink> | <br />
            </nav>
            </div>
            
        </div>
    )
}

export default AmorSuicida;