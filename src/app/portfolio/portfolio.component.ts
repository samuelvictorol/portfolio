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
    { title: 'Conversor MP3 e MP4', desc: 'Conversor de vídeos com suporte para múltiplas plataformas que converte gratuitamente para mp3 ou mp4 a partir do link fornecido utilizando apenas Typescript, HTML e CSS.', url: 'conversor', img: 'assets/conversorImg.png', target: '_self'},
    { title: 'Ecommerce Django', desc: 'Ecommerce em Django (em construção), projeto fullstack de um Ecommerce de roupas com autenticação e integração com api de pagamento.', url:'https://github.com/samuelvictorol/DJANGOEcommerce', img:'assets/ecommerceImg.png', target: '_blank'},
    { title: 'Portfólio Pessoal', desc: 'Criação do meu Portfólio Pessoal utilizando Angular, deploy no GitHub Pages e utiliza EmailJS na tela de contatos para enviar formulário pro meu email profissional.', url: 'home', img: 'assets/portImg.png', target: '_self' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
  ];

  cardUrl(cardUrl: any) {
    if(cardUrl.includes('.com')){
      window.open(cardUrl, '_blank');
    } else {
      this.router.navigate([cardUrl])
    }
  }

}
