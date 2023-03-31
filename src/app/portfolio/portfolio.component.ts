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
     { title: 'CAIXA - SIEVJ', img:'assets/sievjCaixaImg.png', url:"https://www.figma.com/proto/3NIN87Pxi4igP8BHzknUdp/SIEVJ?page-id=0%3A1&node-id=2%3A11&viewport=303%2C325%2C0.07&scaling=min-zoom&starting-point-node-id=2%3A11", desc: 'Projeto interno da CAIXA, um sistema de leilão de jóias onde atuei no desenvolvimento do frontend em Angular e na prototipagem de alta fidelidade com FIGMA. Código não disponível para visualização por se tratar de um projeto privado da empresa.', },
     { title: 'Conversor MP3 e MP4', desc: 'Conversor de vídeos com suporte para múltiplas plataformas que converte gratuitamente para mp3 ou mp4 a partir do link fornecido utilizando apenas Typescript, HTML, CSS e uma API externa.', url: 'conversor', img: 'assets/conversorImg.png', target: '_self'},
     { title: 'PUMA', desc: 'Sendo desenvolvido pelas disciplinas de EPS e MDS, o PUMA é um projeto que tem por objetivo auxiliar os professores no gerenciamento das disciplinas da Engenharia de Produção da Universidade de Brasilia.', img: 'assets/pumaImg.png', url: 'https://fga-eps-mds.github.io/2022-1-PUMA-Doc/' , },
     { privacity: 'privado', img:'assets/basaImg.png', title: 'BASA - Docsflow', desc: 'Projeto interno do Banco da Amazônia onde atuo atualmente no frontend utilizando Vue.js e Quasar. O protótipo do design e banco de dados foi feito utilizando Axure. Código não disponível para visualização por se tratar de um projeto privado da empresa.',  },
     { title: 'Ecommerce Django', desc: 'Ecommerce em Django (em construção), projeto fullstack de um Ecommerce de roupas com autenticação de login e integração de api de pagamento PayPal.', url:'https://github.com/samuelvictorol/DJANGOEcommerce', img:'assets/ecommerceImg.png',},
     { title: 'Portfólio Pessoal', desc: 'Criação do meu Portfólio Pessoal utilizando Angular, deploy no GitHub Pages e utiliza EmailJS na tela de contatos para enviar formulário pro meu email profissional.', url: 'https://github.com/samuelvictorol/portfolio', img: 'assets/portImg.png', },
  ];

  goToLink(link: string) {
    window.location.href = link
  }

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
