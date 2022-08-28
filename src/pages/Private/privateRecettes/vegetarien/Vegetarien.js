import React from 'react'
import steaks from './steaks.jpeg'
import brocolis from './brocolis.jpeg'
import potiron from './potiron.jpeg'
import quinoa from './quinoa.jpeg'
import chaplure from './chapelure.jpeg'
import farine from './farine.jpeg'
import oeufs from './oeufs.jpeg'
import persil from './persil.jpeg'
import ail from './ail.png'
import huile from './huile.jpeg'
import sel from './sel.png'
import poivre from './poivre.png'

export default function Vegetarien() {
  return (
    <div>
      <h2>Végétarien</h2>

      <div>
   <h4>Steaks végétariens au quinoa et légumes d'automne</h4>
    <p className='text-center temps'>Recette facile
   Economique
 Temps total:35 min
 Préparation: 15 min
 Cuisson: 20 min.</p>
   <img src={steaks} className="wrap img-fluid"  alt="steaks végétarien"/>
   </div>

   <p className='temps text-center'>
   Recette facile
   Economique
 Temps total:30 min
 Préparation: 20 min
 Cuisson: 10 min
 </p>
 
  
 <div className="container-fluid ">
<h3>Pour la pâte</h3> 

<div className='ingrediants'>  
<p className='float'>
<img src={brocolis} className="legumes img-fluid" alt=" du brocolis" />
300 g de brocolis.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={potiron} className="legumes col figure-img img-fluid rounded" alt="un potiron" />
250 g de potiron.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={quinoa} className="legumes col figure-img img-fluid rounded" alt=" du quinoa" />
300 g de quinoa.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={chaplure} className="legumes col figure-img img-fluid rounded" alt=" de la chapelure" />
100 g de chapelure.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={farine} className="legumes col figure-img img-fluid rounded" alt="de la farine" />
50 g de farine. </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={oeufs} className="legumes col figure-img img-fluid rounded" alt="oeuf" />
4 oeufs. </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={persil} className="legumes col figure-img img-fluid rounded" alt="du persil" />
3 bruns de persil. </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={ail} className="legumes col figure-img img-fluid rounded" alt="une tête d'ail" />
1 gousse d'ail. </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={huile} className="legumes col figure-img img-fluid rounded" alt="de l'huile d'olive" />
1 càs d'huile d'olive. </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={sel} className="legumes col figure-img img-fluid rounded" alt="du sel" />
1 pincée de sel. </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={poivre} className="legumes col figure-img img-fluid rounded" alt="du poivre" />
1 pincée de poivre. </p>
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
<p className="card-text">Cuire le quinoa en suivant les indications sur le paquet.</p>
</div>
</div>

<div className="card cardexplic" >
<div class="card-body">
<h5 className="card-title">étape 2</h5>
<p className="card-text">Enlever les graines et la peau du potiron et le couper en dés. Hacher le brocoli et l'ail.
</p>
</div>
</div>

<div className="card cardexplic" >
<div class="card-body">
<h5 className="card-title">étape 3</h5>
<p className="card-text">Faire cuire les légumes à la poêle avec une cuillère d'huile d'olive. Ajouter l'ail, saler et poivrer. </p>
</div>
</div>

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 4</h5>
<p className="card-text">Hacher le persil. Mélanger dans un saladier les légumes cuits, le persil et le quinoa.</p>
</div>
</div>   

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 5</h5>
<p className="card-text">Battre 3 œufs et les ajouter à la préparation. Mélanger bien.</p>
</div>
</div>   

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 6</h5>
<p className="card-text">Préparer 3 assiettes creuses : une contenant de la farine, une contenant un œuf battu et une contenant de la chapelure.</p>
</div>
</div>  

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 7</h5>
<p className="card-text">Prélever des boules de pâte, les aplatir en forme de steak puis les passer dans la farine, puis l’œuf et enfin la chapelure.</p>
</div>
</div>
<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 7</h5>
<p className="card-text">Faire cuire à la poêle les steaks pendant 10 minutes en les retournant. Servir les steaks végétariens au quinoa et légumes d'automne bien chaud avec de la salade verte, des pâtes ou des légumes.</p>
</div>
</div>   
    
        
    </div>
  )
}
