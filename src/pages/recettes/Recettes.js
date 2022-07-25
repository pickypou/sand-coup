import React from "react";
import './recettes.css'
import salade from'./salade.png'
import tomate from './tomates.png'
import oignon from './iognon.png'
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
                <img src={salade} className="salade"  alt="salade"/>
                </div>
               <ul className="list-group list-group-horizontal liste">

                <li>
                    <div className="legumes">
                <img src={tomate}  className="ingrediants"alt="tomates"/>  
               </div>
             <p className="nomLegumes">2 tomates</p> 
                </li>

                <li>
                    <div className="legumes">
                <img src={oignon}  className="ingrediants"alt="iognon"/>  
               </div>
             <p className="nomLegumes">1iognon</p>
                </li>

                <li>
                    <div className="legumes">
                <img src={citron}  className="ingrediants"alt="iognon"/>  
               </div>
             <p className="nomLegumes">1/2 citron</p>
                </li>

                <li>
                    <div className="legumes">
                <img src={herbe}  className="ingrediants"alt="origan"/>  
               </div>
             <p className="nomLegumes">1càc d'origan</p>
                </li>

                <li>
                    <div className="legumes">
                <img src={poivre}  className="ingrediants"alt="poivre"/>  
               </div>
             <p className="nomLegumes">poivre</p>
                </li>

                <li>
                    <div className="legumes">
                <img src={sel}  className="ingrediants"alt="sel"/>  
               </div>
             <p className="nomLegumes">sel</p>
                </li>

                <li>
                    <div className="legumes">
                <img src={feta}  className="ingrediants"alt="feta en cube"/>  
               </div>
             <p className="nomLegumes">feta</p>
                </li>

                <li>
                    <div className="legumes">
                <img src={concombre}  className="ingrediants"alt="concombre"/>  
               </div>
             <p className="nomLegumes">1/2concombre</p>
                </li>
                
                <li>
                    <div className="legumes">
                <img src={olive}  className="ingrediants"alt="iolive"/>  
               </div>
             <p className="nomLegumes">olive noir</p>
                </li>

                <li>
                    <div className="legumes">
                <img src={oignon}  className="ingrediants"alt="poivron"/>  
               </div>
             <p className="nomLegumes">1poivron</p>
                </li>
               </ul>

               <div class="card depaRecette">
  <div className="card-body text-danger">
    Commencer la recette
  </div>
</div>

<div className="card cardexplic" >
  <div class="card-body">
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
  <div class="card-body">
    <h5 className="card-title">étape 4</h5>
    <p className="card-text">Disposer sur le dessus de la salade les restes d'oignon et de feta.</p>
  </div>
</div>   

<div className="card cardexplic" >
  <div class="card-body">
    <h5 className="card-title">étape 5</h5>
    <p className="card-text">Ajouter le zeste et le jus de citron, assaisonner avec l'huile et l'origan, sel poivre. Mélanger délicatement et servir.</p>
  </div>
</div>                 
</div>   
    )
}