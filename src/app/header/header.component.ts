import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  isVisible = false;

  constructor() { }

  ngOnInit(){
  }

  onToggleSidenav () {
    this.isVisible ? this.isVisible=false : this.isVisible=true;
    // console.log(this.isVisible);
    this.sidenavToggle.emit();
  }

}
