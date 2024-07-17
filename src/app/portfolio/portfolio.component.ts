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
     { title: 'Midnight Tickets', desc: 'WebApp para serviços de bilheteria com as menores taxas do mercado, diversas features para monitoramento de eventos e pacotes personalizados utilizando integração ao Mercado Pago.', url:'https://midnightickets.com', img:'assets/mid.png',},
     { title: 'SUS - AGHU', desc: 'O Aplicativo de Gestão para Hospitais Universitários (AGHU) é um sistema de gestão hospitalar e prontuário eletrônico disponível para uso gratuito no Sistema Único de Saúde (SUS).', url: 'https://www.gov.br/ebserh/pt-br/governanca/plataformas-e-tecnologias/aghu', img: 'assets/aghu.png', },
     { title: 'FavTab', img:'assets/favtab.png', url:"https://favtab.netlify.app/", desc: 'WebApp para gerenciamento de repertórios e network para Músicos utilizando Vue3 e Express. Vincule diversos items como backing track, karaoke, anotações entre outras possibilidades em suas músicas e salve em repertórios personalizados.', },
     { title: `Instituto Átika`, desc: 'Este projeto social sem fins lucrativos incentiva crianças e adolescentes sem condições financeiras a praticar esportes como o futvôlei. Os produtos vendidos serão revertidos em doações. A landing page foi desenvolvida com responsividade. O deploy automatizado garante atualizações rápidas e seguras.', url:'https://institutoatika.netlify.app/', img:'assets/atika.png',},
     { img:'assets/solarsystem.png', title: 'Sistema Solar 3D', desc: 'Uma viagem pelo Sistema Solar em 3D utilizando Vue3 e Three.js com técnicas avançadas de programação frontend', url:'https://sistema-solar-3js.netlify.app/'  },
     { span: true,title: 'UnB na Mão', desc: 'WebApp Mobile First para facilitar a vida do estudante universitário da UnB, acelerando o acesso aos tópicos mais utilizados pelos alunos. Além de ter um sistema de cadastro de vagas e diferentes tipos de perfis com funcionalidades de ações diferentes.', url: 'https://unbnamao.netlify.app/', img: 'assets/unbnamao.png'},
     { title: 'Protótipo Alta Fidelidade', desc: 'Protótipos de uma aplicação web de alta fidelidade, de forma que seja possível: pesquisar, incluir, alterar e excluir (CRUD) conhecimentos e certificações dos colaboradores da Cast Group, a fim de facilitar a visualização de forma visual e intuitiva para os gestores responsáveis.', img: 'assets/prot.png', url: 'https://github.com/samuelvictorol/PrototipoFigma-CastGroup' , },
     { title: 'My Favorite Github Users', desc: 'Webapp fullstack utilizando api do Github para armazenamento e edição de usuários favoritos. Utilizando Vue3 e Express com javascript e banco de dados.', url:'https://github.com/samuelvictorol/PUMA-Desafio', img:'assets/ghlist.png',},

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
