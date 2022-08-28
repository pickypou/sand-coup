import React from 'react'
import './privateHome.css'
import { Link } from 'react-router-dom'





export default function PrivateHome() {

  
  
  

  return (
    <>
     
      <h2 className='private-title'>bienvenue  sur votre page priver </h2>
    
      <h3 className='private-title'>ici vous pouvez choisir le type de recettes que vous voulez deguster</h3>
    
    <nav className='nav-private-home'>
      <Link to='privateRecette/SansGluten' className='btn btn-outline-danger fs-5 me-4'>recettes sans gluten</Link>
      <Link to='privateRecette/SansLactose' className='btn btn-outline-danger fs-5  me-4'>recettes sans lactose</Link>
      <Link to='privateRecette/vegane' className='btn btn-outline-danger fs-5  me-4'>vegane</Link>
      <Link to='privateRecette/sansOeufs' className='btn btn-outline-danger fs-5  me-4'>Patisserie sans oeufs</Link>
      <Link to='privateRecette/vegetarien' className='btn btn-outline-danger fs-5  me-4'>Pour les végétariens</Link>
      
    </nav>
    
    </>
  )
}
