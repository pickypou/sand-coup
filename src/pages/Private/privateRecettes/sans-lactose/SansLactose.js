import React from 'react'
import laitcoco from './laitcoco.jpeg'
import crepe from './crepe.jpeg'
import farine from './farine.png'
import oeufs from './oeufs.jpeg'
import eau from './eau.jpeg'
import sucre from './sucreenpoudre.jpeg'
import vanille from './vanille.jpeg'
import sel from './sel.png'


export default function SansLactose() {
  return (
    <div>
       <h2>Recette sans lactose </h2>

<div>
   <h4>Pâte à crêpes au lait de coco</h4>
    <p className='text-center temps'>Une délicieuse recette de pâte à crêpes sans lactose..</p>
   <img src={crepe} className="wrap img-fluid"  alt="crêpe"/>
  

   </div>
   <p className='temps text-center'>
         Recette facile Economique Temps total:50 min Préparation: 30 min Cuisson: 5 min Pause: 15 min
   </p>
 
  
 <div className="container-fluid ">
<h3>Pour la pâte</h3>  
<div className='ingrediants'>  
<p className='float'>
<img src={laitcoco} className="legumes img-fluid" alt="noix de coco" />
40 cl de lait de coco.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={farine} className="legumes col figure-img img-fluid rounded" alt="farine" />
250 g de farine.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={oeufs} className="legumes col figure-img img-fluid rounded" alt="oeufs" />
3 oeufs.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={eau} className="legumes col figure-img img-fluid rounded" alt="eau" />
10 cl d'eau.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={sucre} className="legumes col figure-img img-fluid rounded" alt="sucre" />
60 g de sucre en poudre. </p>
</div>


<div className='ingrediants'>  
<p className='float'>
<img src={vanille} className="legumes col figure-img img-fluid rounded" alt="vanille" />
 1CàC de vanille liquide.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={sel} className="legumes col figure-img img-fluid rounded" alt="sel" />
1 pincée de sel  </p>
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
<p className="card-text">Dans un bol, mélanger l'eau et le lait de coco.</p>
</div>
</div>

<div className="card cardexplic" >
<div class="card-body">
<h5 className="card-title">étape 2</h5>
<p className="card-text">Dans un saladier, mélanger la farine, le sel et le sucre. Former un puits au centre, verser la moitié du mélange au lait de coco et remuer.</p>
</div>
</div>

<div className="card cardexplic" >
<div class="card-body">
<h5 className="card-title">étape 3</h5>
<p className="card-text">Battre les oeufs puis les incorporer dans le saladier. Ajouter la vanille et le reste du mélange au lait de coco. Mélanger la préparation afin d'obtenir une pâte bien lisse. </p>
</div>
</div>

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 4</h5>
<p className="card-text">Faire chauffer une poêle huilée, verser une louche de pâte et faire cuire la crêpe 1 minute sur chaque face. Renouveler l'opération jusqu'à épuisement de la pâte. Déguster avec la garniture de votre choix.</p>
</div>
</div>   

      
    </div>
  )
}
