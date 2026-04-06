import { Component, Host, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: false,
  styleUrls: ['./main.component.css']
  
})




export class MainComponent {
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

