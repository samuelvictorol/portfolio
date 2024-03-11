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
     { img:'assets/solarsystem.png', title: 'Sistema Solar 3D', desc: 'Um projeto pessoal que consiste em uma viagem pelo Sistema Solar em 3D utilizando Vue3 e Three.js', url:'https://sistema-solar-3js.netlify.app/'  },
     { title: 'Pixshop, Integração OpenPix', desc: 'Aplicação fullstack integrando a plataforma de pagamento OpenPix. Possui também um CRUD com filtros e webscrapping para popular o banco. Foi utilizado os frameworks Vue e Express.', url:'https://github.com/samuelvictorol/api-pixshop', img:'assets/pixshop.png',},
     { title: 'Integração Paypal Angular', desc: 'Aplicação Web com integração com API do PayPal, Cart dinâmico utilizando diversos conceitos de Angular Framework e estilizado usando Bootstrap.', url: 'https://github.com/samuelvictorol/PayPal-Integration', img: 'assets/paypal.png', },
     { title: 'CAIXA - SIEVJ', img:'assets/sievjCaixaImg.png', url:"https://www.figma.com/proto/3NIN87Pxi4igP8BHzknUdp/SIEVJ?page-id=0%3A1&node-id=2%3A11&viewport=303%2C325%2C0.07&scaling=min-zoom&starting-point-node-id=2%3A11", desc: 'Projeto interno da CAIXA, um sistema de leilão de jóias onde atuei no desenvolvimento do frontend em Angular e na prototipagem de alta fidelidade com FIGMA. Código não disponível para visualização por se tratar de um projeto privado da empresa.', },
     { title: 'Protótipo alta fidelidade', desc: 'Protótipos de uma aplicação web de alta fidelidade, de forma que seja possível: pesquisar, incluir, alterar e excluir (CRUD) conhecimentos e certificações dos colaboradores da Cast Group, a fim de facilitar a visualização de forma visual e intuitiva para os gestores responsáveis.', img: 'assets/prot.png', url: 'https://github.com/samuelvictorol/PrototipoFigma-CastGroup' , },
     { title: `Amazon Alexa Skill's`, desc: 'Desenvolvimento de skills para Amazon Alexa, utilizando Lambda Functions e JavaScript. Skills de emergência de saúde e sequestro integrada ao Twilio para serviços de mensagens SMS e WhatsApp.', url:'https://developer.amazon.com/', img:'assets/alexa.png',},
     { title: 'Manipulador de PDF', desc: 'Script em python que manipula arquivos em PDF, como comprimir e separar.', url:'https://github.com/samuelvictorol/Manipula-PDF-python', img:'assets/pdfcomp.png',},

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
