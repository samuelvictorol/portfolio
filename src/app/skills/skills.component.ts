import { NavServicesService } from './../nav-services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { title: 'Vue.js', img: 'assets/vue.svg' },
    { title: 'Angular Framework', img: 'assets/angular.svg' },
    { title: 'Django', img: 'assets/django.svg' },
    { title: 'Figma', img: 'assets/figma.svg' },
    { title: 'Axure', img: 'assets/axure.svg' },
    { title: 'Python ', img: 'assets/py.svg' },
    { title: 'Javascript', img: 'assets/js.svg' },
    { title: 'Typescript', img: 'assets/ts.svg' },
    { title: 'SQL', img: 'assets/SQL.svg' },
    { title: 'Git', img: 'assets/git.svg' },
  ]


  constructor (protected service: NavServicesService) {}

  

}
