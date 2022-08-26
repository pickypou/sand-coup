import React from 'react'
import cacke from './cacke.jpeg'
import farine from './farine.jpeg'
import choco from './choco.jpeg'
import sucre from './sucreenpoudre.jpeg'
import beurre from './beurre.jpeg'
import creme from './creme.jpeg'

export default function Sansoeufs() {
  return (
    <div>
        <h2>patisserie sans oeufs</h2>

        <div>
   <h4>Fondant au chocolat sans oeuf</h4>
    <p className='text-center temps'>Recette facile
   Economique
 Temps total:35 min
 Préparation: 15 min
 Cuisson: 20 min.</p>
   <img src={cacke} className="wrap img-fluid"  alt="un gateau"/>
  

   </div>
   <p className='temps text-center'>
   Recette facile
   Economique
 Temps total:1 h 10 min
 Préparation: 20 min
 Cuisson: 50 min
 </p>
 
  
 <div className="container-fluid ">
<h3>Pour la pâte</h3>  
<div className='ingrediants'>  
<p className='float'>
<img src={farine} className="legumes img-fluid" alt="de la farine" />
200 g de farine de blé.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={choco} className="legumes col figure-img img-fluid rounded" alt="chocolat" />
150 g de chocolat noir 70%.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={sucre} className="legumes col figure-img img-fluid rounded" alt="sucre en poudre" />
100 g de sucre en poudre.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={beurre} className="legumes col figure-img img-fluid rounded" alt=" du beurre" />
75 g de beurre demi-sel.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={creme} className="legumes col figure-img img-fluid rounded" alt="creme fraiche" />
25 cl de crème liquide entière. </p>
</div>



 </div>

   

  <div className="card depaRecette">
<div className="card-body text-danger">
Commencer la recette
</div>
</div>

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 1</h5>
<p className="card-text">LPréchauffer le four à 180°C.</p>
</div>
</div>

<div className="card cardexplic" >
<div class="card-body">
<h5 className="card-title">étape 2</h5>
<p className="card-text">Faire fondre le chocolat dans une casserole avec le beurre. Mélanger régulièrement.
</p>
</div>
</div>

<div className="card cardexplic" >
<div class="card-body">
<h5 className="card-title">étape 3</h5>
<p className="card-text">Une fois le chocolat fondu, incorporer la crème et le sucre. Mélanger. </p>
</div>
</div>

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 4</h5>
<p className="card-text">Ajouter progressivement la farine et remuer au fur et à mesure.</p>
</div>
</div>   

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 5</h5>
<p className="card-text">Beurrer et fariner un moule à cake et verser la préparation dedans. Enfourner entre 15 et 20 minutes, selon la texture fondante souhaitée.</p>
</div>
</div>   

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 6</h5>
<p className="card-text">AUne fois la cuisson terminée, sortir du four, et attendre qu'il soit tiède pour démouler.</p>
</div>
</div>  

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 7</h5>
<p className="card-text">Déguster ce fondant au chocolat sans oeuf.</p>
</div>
</div>   
      
    </div>
  )
}
