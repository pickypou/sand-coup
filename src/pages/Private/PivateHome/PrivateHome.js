import React, {useContext} from 'react'
import { PrivateContext } from '../../../context/PirvateContext'
import './privateHome.css'
import Button from 'react-bootstrap/Button'

export default function PrivateHome() {

  const {toggleRectte} = useContext(PrivateContext)
  return (
    <div >
      <h2 className='private-title'>bienvenue sur votre page priver </h2>
      <h3 className='private-title'>ici vous pouvez choisir le type de recettes que vous voulez deguster</h3>
      <div className='select-recette'>
        <Button onClick={()=> toggleRectte("sansSel")}
        variant ="outline-primary ms-5 mt-5 ">Sans sel</Button>
      <Button onClick={()=> toggleRectte("sansLactose")}
      variant ="outline-primary ms-5 mt-5 ">Sans lactose</Button>
      <Button onClick={()=> toggleRectte("vegetarien")}
      variant ="outline-primary ms-5 mt-5 "> Végétarien</Button>
      <Button onClick={()=> toggleRectte("veganne")}
      variant ="outline-primary ms-5 mt-5 ">Véganne</Button>
      </div>
      


    </div>
  )
}
