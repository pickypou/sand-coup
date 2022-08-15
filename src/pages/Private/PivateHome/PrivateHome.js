import React, {useContext} from 'react'
import { PrivateContext } from '../../../context/PirvateContext'
import './privateHome.css'
import Button from 'react-bootstrap/Button'


export default function PrivateHome() {

  const {toggleRecette} = useContext(PrivateContext)
  console.log(toggleRecette);


  return (
    <>
     
      <h2 className='private-title'>bienvenue sur votre page priver </h2>
      <h3 className='private-title'>ici vous pouvez choisir le type de recettes que vous voulez deguster</h3>
      <div className='select-recette'>
        <Button onClick={()=> toggleRecette("sansSel")}
        variant ="outline-primary ms-5 mt-5 ">Sans sel</Button>
      <Button onClick={()=> toggleRecette("sansLactose")}
      variant ="outline-primary ms-5 mt-5 ">Sans lactose</Button>
      <Button onClick={()=> toggleRecette("vegetarien")}
      variant ="outline-primary ms-5 mt-5 "> Végétarien</Button>
      <Button onClick={()=> toggleRecette("veganne")}
      variant ="outline-primary ms-5 mt-5 ">Véganne</Button>
      </div>
      


    </>
  )
}
