import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Panier } from '../models/Panier.model';
import { Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class PanierService {

    private panier =[

        // {
        //     id: 0,            
        //     titre : "Masque médical FFP3/N95",
        //     prix:  4.90,
        //     quantite: 1000
        // },   
        // {
        //     id: 1,            
        //     titre : "Masque médical FFP3/N95",
        //     prix:  4.90,
        //     quantite: 1000
        // },   
    ];

    panierSubject = new Subject<any[]>();

    emitProduit(){
        this.panierSubject.next(this.panier.slice());
    }
    getProduits(){
        return this.panier;
    }

    // getProduitById(id : number){
    //     const produitId = this.panier.find(
    //     (s)=>{
    //         return s.id === id
    //     }
    //     );
    //     return produitId;
    // }

    addProduit(panier: Panier){
        const objetRecu = panier;
        const taillePanier = this.panier.length;
        objetRecu.id = taillePanier===0 ? 0 : (taillePanier-1) +1 ;
        this.panier.push(panier);
        // console.log(panier)
        
    }

    delProduit(index : number){
        this.panier.splice(index,1);
        this.emitProduit();
    }
  // test(){
  //   console.log(this.produits[1].prix.euro);
  // }


    constructor() { }
}
