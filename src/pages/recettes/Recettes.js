import React from "react";
import './recettes.css'
import salade from'./salade.png'
import tomate from './tomates.png'
import oignon from './oignon.png'
import citron from './citron.png'
import herbe from './herbes.png'
import poivre from './poivre.png'
import feta from './feta.png'
import olive from './olive.png'
import sel from './sel.png'
import concombre from './concombre.png'
import poivron from './poivron.png'

export default function Recettes(){
    return(
      
        <div>
                <h2>Voici quelques recettes </h2>

             <div>
                <h4>Salade grecque</h4>
                <img src={salade} className="salade img-fluid"  alt="salade"/>
                </div>
               
              <div className="container-fluid ingrediants">
                
   <figure className="figure">
  <img src={tomate} className="legumes col figure-img img-fluid rounded" alt="tomate" />
  <figcaption className="figure-caption ms-4">2 tomates.</figcaption>
</figure>

<figure className="figure">
  <img src={oignon} className="legumes col figure-img img-fluid rounded" alt="oignon" />
  <figcaption className="figure-caption ms-4">1 oignon.</figcaption>
</figure>

<figure className="figure">
  <img src={poivre} className="legumes col figure-img img-fluid rounded" alt="poivre" />
  <figcaption className="figure-caption ms-4">poivre.</figcaption>
</figure>

<figure className="figure">
  <img src={sel} className="legumes col figure-img img-fluid rounded" alt="sel" />
  <figcaption className="figure-caption ms-4">sel.</figcaption>
</figure>

<figure className="figure">
  <img src={feta} className="legumes col figure-img img-fluid rounded" alt="feta" />
  <figcaption className="figure-caption ms-4">feta.</figcaption>
</figure>

<figure className="figure">
  <img src={citron} className="legumes col figure-img img-fluid rounded" alt="citron" />
  <figcaption className="figure-caption ms-4">1 citron.</figcaption>
</figure>

<figure className="figure">
  <img src={herbe} className="legumes col figure-img img-fluid rounded" alt="herbe" />
  <figcaption className="figure-caption ms-4">origan.</figcaption>
</figure>

<figure className="figure">
  <img src={olive} className="legumes col figure-img img-fluid rounded" alt="olive" />
  <figcaption className="figure-caption ms-4">50g d'olives.</figcaption>
</figure>

<figure className="figure">
  <img src={concombre} className="legumes col figure-img img-fluid rounded" alt="concombre" />
  <figcaption className="figure-caption ms-4">1/2 concombre.</figcaption>
</figure>

<figure className="figure">
  <img src={poivron} className="legumes col figure-img img-fluid rounded" alt="poivron" />
  <figcaption className="figure-caption ms-4">1 poivron vert.</figcaption>
</figure>
                
              </div>
             
                

               <div className="card depaRecette">
  <div className="card-body text-danger">
    Commencer la recette
  </div>
</div>

<div className="card cardexplic" >
  <div className="card-body">
    <h5 className="card-title">étape 1</h5>
    <p className="card-text">Découper les tomates en petits dés et les mettre dans un saladier.</p>
  </div>
</div>

<div className="card cardexplic" >
  <div class="card-body">
    <h5 className="card-title">étape 2</h5>
    <p className="card-text">Ajouter le concombre, le poivron vert couper en petit dés et les olives.</p>
  </div>
</div>

<div className="card cardexplic" >
  <div class="card-body">
    <h5 className="card-title">étape 3</h5>
    <p className="card-text">Mélanger avec la moitié de l'oignon et la feta coupée en dés.</p>
  </div>
</div>

          <div className="card cardexplic" >
  <div className="card-body">
    <h5 className="card-title">étape 4</h5>
    <p className="card-text">Disposer sur le dessus de la salade les restes d'oignon et de feta.</p>
  </div>
</div>   

<div className="card cardexplic" >
  <div className="card-body">
    <h5 className="card-title">étape 5</h5>
    <p className="card-text">Ajouter le zeste et le jus de citron, assaisonner avec l'huile et l'origan, sel poivre. Mélanger délicatement et servir.</p>
  </div>
</div>                 
</div>   
    )
}