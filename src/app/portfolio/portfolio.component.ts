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
     { title: 'Midnight Tickets', desc: 'Bilheteria Online com as menores taxas do mercado, diversas features para monitoramento de eventos e venda de ingressos personalizados utilizando a api do Mercado Pago.', url:'https://midnightickets.com', img:'assets/mid.png',},
     { title: 'SUS - AGHU', desc: 'O Aplicativo de Gestão para Hospitais Universitários (AGHU) é um sistema de gestão hospitalar e prontuário eletrônico disponível para uso gratuito no Sistema Único de Saúde (SUS).', url: 'https://www.gov.br/ebserh/pt-br/governanca/plataformas-e-tecnologias/aghu/', img: 'assets/aghu.png', },
     { title: 'Vitrine de Jóias - CAIXA', desc: 'É o ambiente virtual onde são expostos os bens que serão disponibilizados para venda e que foram dados em garantia nas operações de Penhor da CAIXA. As garantias são levadas a leilão para a recuperação do crédito concedido ao cliente tomador, todas elas, vinculadas a contratos não liquidados no prazo acordado..', url:'https://vitrinedejoias.caixa.gov.br/Paginas/default.aspx', img:'assets/sievjCaixaImg.png',},
     { img:'assets/solarsystem.png', title: 'Sistema Solar 3D', desc: 'Uma viagem pelo Sistema Solar em 3D utilizando Vue3 e Three.js com técnicas avançadas de programação frontend', url:'https://sistema-solar-3js.netlify.app/'  },
     { title: 'Sistema de Tarifas - BASA', img:'assets/basa.png', url:"https://www.bancoamazonia.com.br/tarifas-bancarias", desc: 'Sistema de Tarifas para o Banco da Amazônia utilizando Vue3, Spring e SQL Server. Gerenciamento de pacotes de serviçoes e tarifas bancárias, desde o desenvolvimento até a integração contínua.', },
     { title: `Instituto Átika`, desc: 'Este projeto social sem fins lucrativos incentiva crianças e adolescentes sem condições financeiras a praticar esportes como o futvôlei. Os produtos vendidos serão revertidos em doações. A landing page foi desenvolvida com responsividade. O deploy automatizado garante atualizações rápidas e seguras.', url:'https://institutoatika.org/', img:'assets/atika.png',},
     { span: true,title: 'UnB na Mão', desc: 'WebApp Mobile First para facilitar a vida do estudante universitário da UnB, acelerando o acesso aos tópicos mais utilizados pelos alunos. Além de ter um sistema de cadastro de vagas e diferentes tipos de perfis com funcionalidades de ações diferentes.', url: 'https://unbnamao.netlify.app/', img: 'assets/unbnamao.png'},
     { title: 'Protótipo Alta Fidelidade', desc: 'Protótipos de uma aplicação web de alta fidelidade, de forma que seja possível: pesquisar, incluir, alterar e excluir (CRUD) conhecimentos e certificações dos colaboradores da Cast Group, a fim de facilitar a visualização de forma visual e intuitiva para os gestores responsáveis.', img: 'assets/prot.png', url: 'https://github.com/samuelvictorol/PrototipoFigma-CastGroup' , },

  ];

  goToLink(link: string) {
    window.location.href = link
  }

  cardUrl(cardUrl: any) {
    if(cardUrl.includes('.com') || cardUrl.includes('.io') || cardUrl.includes('.app') || cardUrl.includes('.br') || cardUrl.includes('.org')){
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
