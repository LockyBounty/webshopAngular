import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { PanierService } from '../services/panier.service';
import { Router } from '@angular/router';
import {Produit} from '../models/Produit.model';
import {Panier} from '../models/Panier.model';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit, OnDestroy {

  panier : Panier[];
  panierSubscription : Subscription;

  constructor(private panierService : PanierService,
    private router : Router) { }

  ngOnInit(){
    this.initPanier();
  }

  initPanier(){
    this.panierSubscription = this.panierService.panierSubject.subscribe(
      (panier : Panier[])=>{
        this.panier = panier;
      }
    );
    this.panierService.emitProduit();
  }

  // onAjouter(produit:Produit){
  //   this.panierService.addProduit(produit);
  // }
  onSupprimer(index: number){
    this.panierService.delProduit(index);
  }

  calculTotal(){
    return this.panier.reduce((a, c) => (a + c.prix * c.quantite), 0)
  }

  test(){
    console.log(this.panier);
    // let total = this.panier.reduce(
    //   (sum, {total})=>
    //     sum + total, 0
      
    // );
    // console.log(total);
  }

  ngOnDestroy(){
    this.panierSubscription.unsubscribe();
  }


}
