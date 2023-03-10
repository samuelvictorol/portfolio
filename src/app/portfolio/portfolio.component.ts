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
    this.navService.mouseIn('portfolio', false)
  }
  cards = [
    { title: 'Portfólio Pessoal', desc: 'Criação do meu Portfólio Pessoal utilizando Angular, deploy no GitHub Pages e utiliza EmailJS na tela de contatos para enviar formulário pro meu email profissional.', url: 'https://github.com/samuelvictorol/portfolio', img: 'assets/portImg.png', target: '_blank' },
    { title: 'PUMA', desc: 'O projeto de Plataforma Unificada de Metodologias Ativas (PUMA) de 2022.1 é uma continuação dos semestres passados, sendo desenvolvido pelas disciplinas de EPS e MDS. O PUMA é um projeto que tem por objetivo auxiliar os professores no gerenciamento das disciplinas da Engenharia de Produção da Universidade de Brasilia.', img: 'assets/pumaImg.png', url: 'https://fga-eps-mds.github.io/2022-1-PUMA-Doc/' , target: '_blank' },
    { title: 'Conversor MP3 e MP4', desc: 'Conversor de vídeos com suporte para múltiplas plataformas que converte gratuitamente para mp3 ou mp4 a partir do link fornecido utilizando apenas Typescript, HTML, CSS e uma API externa.', url: 'conversor', img: 'assets/conversorImg.png', target: '_self'},
    { title: 'Ecommerce Django', desc: 'Ecommerce em Django (em construção), projeto fullstack de um Ecommerce de roupas com autenticação e integração com api de pagamento.', url:'https://github.com/samuelvictorol/DJANGOEcommerce', img:'assets/ecommerceImg.png', target: '_blank'},
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
    { title: 'Em breve :)', desc: 'lorem Ipsum  is Lorem Ipsum' },
  ];

  cardUrl(cardUrl: any) {
    if(cardUrl.includes('.com')){
      window.open(cardUrl, '_blank');
    } else if(cardUrl.includes('PUMA-Doc')){
      window.open(cardUrl, '_blank');
    } 
    else {
      this.navService.toggleHideNav(false)
      
      const wait = () => {
        this.router.navigate([cardUrl])
      }
      
      setTimeout(wait, 100)
    }
  }

}
