import { Component, Host, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})




export class NavbarComponent {
  title = 'navbar';
  constructor(){

  }

  menuVariable:boolean = false;
  menuIconVariable:boolean = false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menuIconVariable =! this.menuIconVariable;
  }
}

