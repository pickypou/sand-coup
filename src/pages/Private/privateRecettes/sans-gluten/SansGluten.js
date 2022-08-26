import React from 'react'
import wraps from './wraps.jpeg'
import oeuf from './oeuf.jpeg'
import cremeFraiche from './cremefraiche.jpeg'
import farine from './farinederiz.png'
import maizena from './maizena.jpeg'
import sel from './sel.png'
import saumon from './saumon-fume.jpeg'
import yaourt from './yaourt.jpeg'
import salade from './salade.jpeg'
import concombre from './concombre.png'
import poivron from './poivron.jpeg'
import poischiche from './poischiche.jpeg'
import ail from './ail.jpeg'
import ciboulette from './ciboulette.jpeg'
import tabasco from './tabasco.png'
import huiledolive from './huiledolive.jpeg'
import poivre from './poivre.png'
import './sansgluten.css'






export default function SansGluten() {
  return (
   

      <div>
                <h2>Recette sans gluten </h2>

             <div>
                <h4>Wrap d'été au saumon</h4>
                 <p className='text-center temps'>Découvrez sans plus tarder cette recette croquante de wrap totalement healthy et savoureuse de saumon fumé, crudités et pois chiches sans gluten.</p>
                <img src={wraps} className="wrap img-fluid"  alt="wrap"/>
               
        
                </div>
                <p className='temps text-center'>
                      Recette facile Economique Temps total:50 min Préparation: 30 min Cuisson: 5 min Pause: 15 min
                </p>
              
               
              <div className="container-fluid ">
             <h3>Pour la pâte</h3>  
  <div className='ingrediants'>  
    <p className='float'>
    <img src={oeuf} className="legumes img-fluid" alt="oeuf" />
  4 oeufs.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={cremeFraiche} className="legumes col figure-img img-fluid rounded" alt="creme fraiche" />
  10 cl de crême fraiche.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={farine} className="legumes col figure-img img-fluid rounded" alt="poivre" />
  250 g de farine de riz.</p>
  </div>
  
  <div className='ingrediants'>  
    <p className='float'>
    <img src={maizena} className="legumes col figure-img img-fluid rounded" alt="sel" />
     150 g de maïzena.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
     <img src={sel} className="legumes col figure-img img-fluid rounded" alt="feta" />
    1 càc de sel. </p>
  </div>


<h3>Pour la garniture</h3>

<div className='ingrediants'>  
    <p className='float'>
   <img src={saumon} className="legumes col figure-img img-fluid rounded" alt="citron" />
    4 tranches e saumon fumé.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={yaourt} className="legumes col figure-img img-fluid rounded" alt="herbe" />
    1 yaourt à la grecque </p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
   <img src={salade} className="legumes col figure-img img-fluid rounded" alt="olive" />
  1 salade romaine.</p>
  </div>
  
  <div className='ingrediants'>  
    <p className='float'>
   <img src={concombre} className="legumes col figure-img img-fluid rounded" alt="concombre" />
  1 concombre.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={poivron} className="legumes col figure-img img-fluid rounded" alt="poivron" />
   poivron rouge.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={poischiche} className="legumes col figure-img img-fluid rounded" alt="poivron" />
  80 g de pois chiches cuits.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={ail} className="legumes img-fluid" alt="ail" />
  1/2 gousse d'ail hachée.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={ciboulette} className="legumes img-fluid" alt="ciboulette" />
  8 brins de ciboulette.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={tabasco} className="legumes img-fluid" alt="tabasco" />
  3 gouttes de tabasco.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={huiledolive} className="legumes img-fluid" alt="huile d'olive" />
  1 càs d'huile d'olive.</p>
  </div>

  <div className='ingrediants'>  
    <p className='float'>
    <img src={poivre} className="legumes img-fluid" alt="poivre" />
  poivre.</p>
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
    <p className="card-text">Préparer la pâte : mélanger la farine de riz, la Maïzena et le sel. Incorporer les œufs et remuer. Ajouter 10 cl d'eau et la crème fleurette, puis mélanger jusqu'à obtenir une pâte homogène. Laisser reposer 15 minutes. .</p>
  </div>
</div>

<div className="card cardexplic" >
  <div class="card-body">
    <h5 className="card-title">étape 2</h5>
    <p className="card-text">Chauffer une crêpière antiadhésive sur feu vif légèrement graissée (optionnel). Verser une louche de pâte et faire cuire 1 minute d'un côté et 30 secondes de l'autre (le wrap doit légèrement griller). Recommencer jusqu'à épuisement de la pâte.</p>
  </div>
</div>

<div className="card cardexplic" >
  <div class="card-body">
    <h5 className="card-title">étape 3</h5>
    <p className="card-text">Préparer la garniture : mélanger le yaourt avec l'huile d'olive, l'ail haché, la ciboulette ciselée, le tabasco, du sel et du poivre. Réserver au frais. </p>
  </div>
</div>

          <div className="card cardexplic" >
  <div className="card-body">
    <h5 className="card-title">étape 4</h5>
    <p className="card-text">Peler le concombre et le tailler en fines tranches dans la longueur. Rincer les pois chiches. Effeuiller la salade en supprimant les grosses côtes. Couper le poivron en quartiers, retirer les pépins et les parties blanches, puis recouper la chair en lanières.</p>
  </div>
</div>   

<div className="card cardexplic" >
  <div className="card-body">
    <h5 className="card-title">étape 5</h5>
    <p className="card-text">AGarnir chaque wrap de crudités, pois chiches et saumon. Ajouter une grosse cuillère à soupe de préparation au yaourt. </p>
  </div>
</div>                 
</div>   
    )

   
  
}
