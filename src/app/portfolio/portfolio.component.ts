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
  scrollValue = 0

  ngOnInit(): void {
    this.navService.toggleHideNav(true)
    this.navService.mouseIn('portfolio', false)
  }

   projects = [
     { span: true,title: 'Weather App', desc: 'Aplicativo que mostra o clima ao redor do planeta e mostra uma imagem do lugar no background. Utilizando Vanilla JS e APIs externas do Unsplash e do WeatherApi.', url: 'https://samuelvictorol.github.io/WeatherApp/', img: 'assets/weather-app.png'},
     { title: 'Integração Paypal Angular', desc: 'Aplicação Web com integração com API do PayPal, Cart dinâmico utilizando diversos conceitos de Angular Framework e estilizado usando Bootstrap.', url: 'https://github.io/samuelvictorol/PayPal-Integration', img: 'assets/paypal.png', },
     { btn:'', privacity: 'privado', img:'assets/basaImg.png', title: 'BASA', desc: 'Trabalhei em diversos projetos internos do Banco da Amazônia, utilizando Angular e Vue.js como frameworks para frontend e EntityFramework e Maven para backend. O protótipo do design e banco de dados foi feito utilizando Axure. Códigos no GitLab não estão disponíveis para visualização por se tratar de um projeto privado da empresa.',  },
     { title: 'CAIXA - SIEVJ', img:'assets/sievjCaixaImg.png', url:"https://www.figma.com/proto/3NIN87Pxi4igP8BHzknUdp/SIEVJ?page-id=0%3A1&node-id=2%3A11&viewport=303%2C325%2C0.07&scaling=min-zoom&starting-point-node-id=2%3A11", desc: 'Projeto interno da CAIXA, um sistema de leilão de jóias onde atuei no desenvolvimento do frontend em Angular e na prototipagem de alta fidelidade com FIGMA. Código não disponível para visualização por se tratar de um projeto privado da empresa.', },
     { title: 'PUMA', desc: 'Sendo desenvolvido pelas disciplinas de EPS e MDS, o PUMA é um projeto que tem por objetivo auxiliar os professores no gerenciamento das disciplinas da Engenharia de Produção da Universidade de Brasilia.', img: 'assets/pumaImg.png', url: 'https://fga-eps-mds.github.io/2022-1-PUMA-Doc/' , },
     { title: 'Lista API Github', desc: 'Aplicação fullstack para um projeto de extensão da UnB. Uma lista dos 5 usuários favoritos consumindo a api do github e criando endpoints de requisições.', url:'https://github.com/samuelvictorol/PUMA-Desafio', img:'assets/ghlist.png',},
  ];

  goToLink(link: string) {
    window.location.href = link
  }

  cardUrl(cardUrl: any) {
    if(cardUrl.includes('.com') || cardUrl.includes('.io')){
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
