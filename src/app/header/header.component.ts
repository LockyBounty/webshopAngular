import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PanierService } from '../services/panier.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  panier: any[]=[];
  panierSubscription : Subscription;

  @Output() public sidenavToggle = new EventEmitter();

  isVisible = false;

  constructor(private panierService : PanierService) { }

  ngOnInit(){
    this.initPanier();
  }
  initPanier(){
    this.panierSubscription = this.panierService.panierSubject.subscribe(
      (panier : any[])=>{
        this.panier = panier;
      }
    )
    this.panierService.emitProduit();
    // console.log(this.panier.length)
  }
  
  onToggleSidenav () {
    this.isVisible ? this.isVisible=false : this.isVisible=true;
    // console.log(this.isVisible);
    this.sidenavToggle.emit();
  }

}
