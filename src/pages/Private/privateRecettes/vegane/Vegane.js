import React from 'react'
import ragout from './ragout.jpeg'
import carotte from './carotte.jpeg'
import celeri from './celeri.jpeg'
import oignon from './oignon.jpeg'
import ail from './ail.png'
import pdt from './pdt.jpeg'
import champignons from './champignons.jpeg'
import chataignes from './chataignes.jpeg'
import huile from './huile.jpeg'
import cidre from './cidre.jpeg'
import coco from './coco.jpeg'
import thyn from './thyn.jpeg'
import sel from './sel.png'
import poivre from './poivre.png'

export default function Vegane() {
  return (
    <div>
      <h2>Recette vegane</h2>

      <div>
   <h4>Ragoût vegan au cidre</h4>
    <p className='text-center temps'>Une recette 100 % vegan aux légumes d’hiver, avec des saveurs traditionnelles.</p>
   <img src={ragout} className="wrap img-fluid"  alt="un ragout"/>
  

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
<img src={carotte} className="legumes img-fluid" alt="des carottes" />
3 carottes.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={celeri} className="legumes col figure-img img-fluid rounded" alt="branches de celeri" />
1 branche de celeri.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={oignon} className="legumes col figure-img img-fluid rounded" alt="oignon" />
1 gros oignon.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={ail} className="legumes col figure-img img-fluid rounded" alt=" de l'ail" />
3 gousses d'ail.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={pdt} className="legumes col figure-img img-fluid rounded" alt="pomme de terre" />
3 pomme de terre. </p>
</div>


<div className='ingrediants'>  
<p className='float'>
<img src={champignons} className="legumes col figure-img img-fluid rounded" alt="des champignons" />
 450 g de champignons de paris.</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={chataignes} className="legumes col figure-img img-fluid rounded" alt="des chataignes" />
150 g de marrons épluchés.  </p>
</div>
<div className='ingrediants'>  
<p className='float'>
<img src={huile} className="legumes col figure-img img-fluid rounded" alt="huile d'olive" />
20 ml d'huile d'olive.  </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={cidre} className="legumes col figure-img img-fluid rounded" alt="Bouteil de cidre" />
200 ml de cidre.  </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={coco} className="legumes col figure-img img-fluid rounded" alt="lait de coco" />
400 ml de lait de coco.  </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={thyn} className="legumes col figure-img img-fluid rounded" alt="branche de thyn" />
5 branche de thyn frais ou séché.  </p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={sel} className="legumes col figure-img img-fluid rounded" alt="du sel" />
selon votre goût</p>
</div>

<div className='ingrediants'>  
<p className='float'>
<img src={poivre} className="legumes col figure-img img-fluid rounded" alt="du poivre" />
selon votre goût</p>
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
<p className="card-text">Laver et éplucher les carottes. En couper une en petits dés, les deux autres en trois ou quatre tronçons. Laver le céleri et le couper en rondelles. Éplucher l'oignon et l’émincer. Éplucher et écraser les gousses d’ail.</p>
</div>
</div>

<div className="card cardexplic" >
<div class="card-body">
<h5 className="card-title">étape 2</h5>
<p className="card-text">Éplucher et laver les pommes de terre, les couper en quatre. Couper en lamelles les champignons. Si les marrons sont en boîte, prélever 150 g et les rincer.</p>
</div>
</div>

<div className="card cardexplic" >
<div class="card-body">
<h5 className="card-title">étape 3</h5>
<p className="card-text">Dans une cocotte, verser l'huile d'olive et faire revenir sur feu moyen 5 minutes la carotte, le céleri et l'oignon, en salant. Ajouter les deux autres carottes et les pommes de terre, saler. </p>
</div>
</div>

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 4</h5>
<p className="card-text">Faire revenir 5 minutes en remuant de temps en temps et incorporer les champignons, les gousses d'ail, les marrons et le thym. Saler et poivrer. Faire cuire 10 minutes en remuant de temps en temps.</p>
</div>
</div>   

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 5</h5>
<p className="card-text">Verser le cidre et laisser mijoter 15 minutes avec le couvercle de la cocotte sur feu moyen.</p>
</div>
</div>   

<div className="card cardexplic" >
<div className="card-body">
<h5 className="card-title">étape 6</h5>
<p className="card-text">Ajouter le lait de coco et poursuivre la cuisson à couvert 15 minutes. Ce plat se réchauffe facilement, on peut le préparer à l’avance.</p>
</div>
</div>   
    </div>
  )
}
