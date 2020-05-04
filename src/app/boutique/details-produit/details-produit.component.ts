import { Component, OnInit, OnDestroy,} from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { PanierService } from '../../services/panier.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Produit} from '../../models/Produit.model';
import {Panier} from '../../models/Panier.model';
import { Subscription } from 'rxjs';
import { faShippingFast, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.scss']
})
export class DetailsProduitComponent implements OnInit {

  produit : Produit;
  produitSubscription : Subscription;
  faShippingFast = faShippingFast;
  faPlus =faPlus;
  faMinus =faMinus;
  maQuantite = 10;
  calculTotal = 0;


  constructor(private produitService : ProduitService,
    private panierService : PanierService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.initProduit();
    
  }

  initProduit(){
    const id = this.route.snapshot.params['id']; 
    //<-- recup la param  de l'url

    this.produit = this.produitService.getProduitById(+id); 
    //<--envoyer la param en arg ds la methode du service pour recup l'objet
    
  }


  //<-- boutons pour changer la valeur d'un input en temps reel
  onMoins(a){
    if (this.maQuantite > 10){
      this.maQuantite--;
      
    }
    return a;
  }
  onPlus(a){
    if (this.maQuantite < 200){
      this.maQuantite++;
      
    }
  }

  onAjouterDansPanier(a: string, b: number, c:number){
    
    const newPanier = new Panier(
      0,
      a,
      b,
      c
    );
    // console.log(newPanier);
    this.panierService.addProduit(newPanier);
    this.router.navigate(['/panier']);
  }

  test(){
    console.log('lol')
    
    // console.log('test')
    // console.log(this.produit.prix.total);
    // console.log(Math.floor(this.produit.prix.total*56))
  }



  
}
