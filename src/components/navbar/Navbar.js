import React, {useContext} from "react";
import { Link} from "react-router-dom";
import './navbar.css'
import { UserContext } from "../../context/UserContext";

export default function Navbar(){
const {toggleModals} = useContext(UserContext)

    return(
        <nav className="navbar navbar-extand-lg px-4 fixed-top">        
            <button class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse"
             data-bs-target="#navbarSupportedContent" 
             aria-controls="navbarSupportedContent" 
             aria-expanded="false" 
             aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <Link className="navbar-brand" to="/">Accueil</Link>
            <Link className="navbar-brand" to="recette">Recettes</Link>
        
        <div>
            <button onClick={()=>toggleModals("signUp")}
            className="btn btn-primary">Sign Up</button>
            <button onClick={()=>toggleModals("signIn")}
            className="btn btn-primary ms-3">Sign In</button>
            <button onClick={()=>toggleModals("close")}
            className="btn btn-primary ms-3">Log Out</button>
        </div>
        </nav>
    )
}