import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  h2 = " ??? ";
  adjetivos = [ "Frontend", "Fullstack", "Webdesign", "Prototipagem", "Programador", "Trainee" ]
  constructor() { }

  ngOnInit(): void {
    const disableNav = document.querySelector('.nav-wrapper') as HTMLElement
    disableNav.style.visibility = 'visible'

  }

  changeH2(){
    this.h2 = this.adjetivos[this.sorteiaArray()]
  }

  sorteiaArray(){
    return Math.floor(Math.random() * this.adjetivos.length);
 }

}
