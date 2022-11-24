import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const enableNav = document.querySelector('.nav-wrapper') as HTMLElement
    enableNav.style.visibility = 'visible'
  }

}
