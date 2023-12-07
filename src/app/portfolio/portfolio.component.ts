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
     { span: true,title: 'UnB na Mão', desc: 'WebApp Mobile First para facilitar a vida do estudante universitário da UnB, acelerando o acesso aos tópicos mais utilizados pelos alunos. Além de ter um sistema de cadastro de vagas e diferentes tipos de perfis com funcionalidades de ações diferentes.', url: 'https://unbnamao.netlify.app/', img: 'assets/unbnamao.png'},
     { img:'assets/solarsystem.png', title: 'Sistema Solar 3D', desc: 'Um projeto pessoal que consiste em uma viagem pelo Sistema Solar em 3D utilizando Vue3 e Three.js', url:'https://sistemasolar.netlify.app/'  },
     { title: 'Integração Paypal Angular', desc: 'Aplicação Web com integração com API do PayPal, Cart dinâmico utilizando diversos conceitos de Angular Framework e estilizado usando Bootstrap.', url: 'https://github.io/samuelvictorol/PayPal-Integration', img: 'assets/paypal.png', },
     { title: 'CAIXA - SIEVJ', img:'assets/sievjCaixaImg.png', url:"https://www.figma.com/proto/3NIN87Pxi4igP8BHzknUdp/SIEVJ?page-id=0%3A1&node-id=2%3A11&viewport=303%2C325%2C0.07&scaling=min-zoom&starting-point-node-id=2%3A11", desc: 'Projeto interno da CAIXA, um sistema de leilão de jóias onde atuei no desenvolvimento do frontend em Angular e na prototipagem de alta fidelidade com FIGMA. Código não disponível para visualização por se tratar de um projeto privado da empresa.', },
     { title: 'PUMA', desc: 'Sendo desenvolvido pelas disciplinas de EPS e MDS, o PUMA é um projeto que tem por objetivo auxiliar os professores no gerenciamento das disciplinas da Engenharia de Produção da Universidade de Brasilia.', img: 'assets/pumaImg.png', url: 'https://fga-eps-mds.github.io/2022-1-PUMA-Doc/' , },
     { title: 'Lista API Github', desc: 'Aplicação fullstack para um projeto de extensão da UnB. Uma lista dos 5 usuários favoritos consumindo a api do github e criando endpoints de requisições.', url:'https://github.com/samuelvictorol/PUMA-Desafio', img:'assets/ghlist.png',},
  ];

  goToLink(link: string) {
    window.location.href = link
  }

  cardUrl(cardUrl: any) {
    if(cardUrl.includes('.com') || cardUrl.includes('.io') || cardUrl.includes('.app')){
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
