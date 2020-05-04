import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Produit} from '../models/Produit.model';
import {Subscription} from 'rxjs';
import { ProduitService } from '../services/produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit, OnDestroy {

  @Input() id : number;
  @Input() index : number;
  @Input() indexOfProduit : number;

  produits : Produit[];
  produitSubscription : Subscription;

  constructor(private produitService : ProduitService,
    private router : Router) { }

  ngOnInit() {
    this.initProduct();
  }

  initProduct() {
    this.produitSubscription = this.produitService.produitSubject.subscribe(
      (produits :Produit[])=>{
        this.produits = produits;
      }
    );
    this.produitService.emitProduit();
  }

  onDetails(produit:number){
    this.router.navigate(["/produits", produit]);
  }

  test(){
    console.log(this.produits[0].id)
  }

  ngOnDestroy(){
    this.produitSubscription.unsubscribe();
  }

}
