import React, {useContext} from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import { UserContext } from "../../context/UserContext";
import { signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { auth } from "../../firebase-config";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


export default function Navbar(){

const {toggleModals} = useContext(UserContext)
const navigate = useNavigate()

const logOut = async () =>{
    try {
        await signOut(auth)
        navigate("/")
    } catch {
        alert("Vous éte deconnecter de votre compte")
    }
}

    return(
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <div className="collaps navbar-collaps" id="navbarSupportedContent">
             <Link className="navbar-brand ms-2" to="/">Accueil</Link>
            <Link className="navbar-brand" to="/recette">Recettes</Link>
            <Link className="navbar-brand" to="/private/private-home">Mon-espace-personnel </Link>
            
           </div>
           
      
        <NavbarCollapse className="justify-content-end">
        
            <button onClick={()=>toggleModals("signUp")}
            className="btn">Inscription</button>
            <button onClick={()=>toggleModals("signIn")}
            className="btn ms-3">Connexion</button>
            <button onClick={logOut}
            className="btn ms-3">Log Out</button>
        </NavbarCollapse>
            
    
        </div>  
        </div>
        </nav>
    )
}