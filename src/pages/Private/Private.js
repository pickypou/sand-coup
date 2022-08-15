import React, { useContext } from "react";
import { PrivateContext } from "../../context/PirvateContext";
import { UserContext } from "../../context/UserContext";
import { Outlet, Navigate } from "react-router-dom";


export default function Private() {
  const { currentUser, selectRecette } = useContext(
    UserContext,
    PrivateContext
  );

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  if (selectRecette) {
    return <Navigate to="/private/privateRecette/" />;
  }

  return (
    
    

       <div className="container">
      <Outlet />
    </div>
    
   
  );
}
