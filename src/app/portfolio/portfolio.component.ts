import { NavServicesService } from './../nav-services.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(protected router: Router, protected navService: NavServicesService){}

  ngOnInit(): void {
    this.navService.toggleHideNav(true)
  }

  cards = [
    { title: 'Conversor MP3 e MP4', desc: 'Conversor de vídeos com suporte para múltiplas plataformas que converte gratuitamente para mp3 ou mp4 a partir do link fornecido.', url: 'conversor', img: 'assets/conversorImg.png' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
  ];

  cardUrl(cardUrl: any) {
    this.router.navigate([cardUrl])
  }

}
