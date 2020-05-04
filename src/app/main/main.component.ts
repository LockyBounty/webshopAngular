import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produit } from '../models/Produit.model';
import { faCoffee, faSpinner, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  produits : Produit[];
  produitSubscription : Subscription;

  faCoffee = faCoffee;
  faSpinner = faSpinner;
  faCog = faCog;

  constructor(private produitService : ProduitService,
    private router :Router) { }


  ngOnInit(){
    this.initProduits();
  }

  initProduits() {
    this.produitSubscription = this.produitService.produitSubject.subscribe(
      (produits: Produit[])=> {
        this.produits = produits;
      }
    );
    this.produitService.emitProduit();
  }

  ngOnDestroy() {
    this.produitSubscription.unsubscribe();
  }

  // test(){
  //   console.log(this.produits[1].description) 
  // }

}
