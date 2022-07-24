import React from "react";
import { Link} from "react-router-dom";
import './navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar navbar-extand-lg fixed-top">
            <div className="container-fluid">
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
        </div>
        </nav>
    )
}