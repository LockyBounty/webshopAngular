import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  private produits : Produit[] = [
    {
      id: 0,
      photo : "../../assets/images/masque-anti-coronavirus-ffp3-n95.jpg",
      titre : "Masque médical FFP3/N95",
      description: `<p>Masque respiratoire de type FFP3, faisant parti des masques ayant le plus haut\
      niveau de protection et de certification à l'heure actuelle. Adapté aux milieux à haut risque de contamination.</p>\
      <p><strong>Les quatre couches filtrent 99% de l'air ambiant.</strong> Conçu avec des textiles dernière génération respectant\
      l'ensemble des normes CE de l'Union européenne dans la catégorie FFP3.</p>\
      <p>Sa forme dit de "Bec de canard" ou "Bec d'oie" permet de recouvrir entièrement et efficacement vos voies respiratoires.</p>\
      <p><i>L'apparence de ce produit peut légèrement différer en fonction des stocks de nos fournisseurs. \
      Les niveaux de certification et de protection restent cependant identiques.</i></p>
      `,
      prix: {euro: 4,
      centimes: 90,
      total: 4.90}
    },    
    {
      id: 1,
      photo : "../../assets/images/thermometre-sans-contact.jpg",
      titre : "Thermomètre sans-contact",
      description: `<p>Thermomètre dernière génération de qualité hospitalière : ce thermomètre infrarouge vous permettra \
      d’effectuer des mesures de température très précises et totalement fiables. Obtenez la température précise en quelques secondes.</p>\
      <p>Comme vous n’établissez pas de contact, vous évitez tout risque de transmission. \
      Vous pouvez prendre des mesures à tout moment, même lorsque votre enfant dort et sans même qu’il s’en rende compte.</p>\
      <p>Convient à tous les âges : bébés, enfants, adultes et personnes âgées. Utilisable en intérieur comme en extérieur.</p>\
      <p>Facile d'utilisation, prise en main rapide et intuitive. Alimenté par deux piles AAA (non fournis).</p>\
      <p>Certifié CE, FDA, FCC et ROHS.</p>
      `,
      prix: {euro: 59,
        centimes : 90,
        total: 59.90}
    },
  ];

  produitSubject = new Subject<Produit[]>();

  emitProduit(){
    this.produitSubject.next(this.produits.slice());
  }

  getProduitById(id : number){
    const produitId = this.produits.find(
      (s)=>{
        return s.id === id
      }
    );
    return produitId;
  }

  addProduit(produit : Produit){
    this.produits.push(produit);
    this.emitProduit();
  }
  // test(){
  //   console.log(this.produits[1].prix.euro);
  // }


  constructor() { }
}
