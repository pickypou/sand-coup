import React from 'react'
import './privateHome.css'
import { Link } from 'react-router-dom'





export default function PrivateHome() {

  
  

  

  return (
    <>
     
      <h2 className='private-title'>bienvenue  sur votre page priver </h2>
      <h3 className='private-title'>ici vous pouvez choisir le type de recettes que vous voulez deguster</h3>
    
    <nav>
      <Link to='privateRecette/SansGluten' className='btn'>recettes sans gluten</Link>
      
    </nav>
    
    </>
  )
}
