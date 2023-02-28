import { NavServicesService } from './../nav-services.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  constructor (private router: Router, protected navService: NavServicesService) {}
  ngOnInit(): void {
    this.mouseIn('home', false)
    this.navService.darkModeExec()
  }

  cleanMargin(){
    const home = document.querySelector('#home') as HTMLElement
    const portfolio = document.querySelector('#portfolio') as HTMLElement
    const sobre = document.querySelector('#sobre') as HTMLElement
    const contato = document.querySelector('#contato') as HTMLElement
    const homeResponsive = document.querySelector('#home-responsive') as HTMLElement
    const portfolioResponsive = document.querySelector('#portfolio-responsive') as HTMLElement
    const sobreResponsive = document.querySelector('#sobre-responsive') as HTMLElement
    const contatoResponsive = document.querySelector('#contato-responsive') as HTMLElement
    home.classList.remove('a-selected')
    portfolio.classList.remove('a-selected')
    sobre.classList.remove('a-selected')
    contato.classList.remove('a-selected')
    homeResponsive.classList.remove('a-selected')
    portfolioResponsive.classList.remove('a-selected')
    sobreResponsive.classList.remove('a-selected')
    contatoResponsive.classList.remove('a-selected')
  }
  mouseIn(rotaString: string, click: boolean): void {
    this.cleanMargin()
    if(click){
      this.navService.minimizeNavResponsive()
    }
    if(rotaString === 'home') {
      const home = document.querySelector('#home') as HTMLElement
      const homeResponsive = document.querySelector('#home-responsive') as HTMLElement
      home.classList.add('a-selected')
      homeResponsive.classList.add('a-selected')
    } else if(rotaString === 'portfolio'){
      const portfolio = document.querySelector('#portfolio') as HTMLElement
      const portfolioResponsive = document.querySelector('#portfolio-responsive') as HTMLElement
      portfolio.classList.add('a-selected')
      portfolioResponsive.classList.add('a-selected')
    } else if(rotaString === 'sobre') {
      const sobre = document.querySelector('#sobre') as HTMLElement
      const sobreResponsive = document.querySelector('#sobre-responsive') as HTMLElement
      sobre.classList.add('a-selected')
      sobreResponsive.classList.add('a-selected')
    } else {
      const contato = document.querySelector('#contato') as HTMLElement
      const contatoResponsive = document.querySelector('#contato-responsive') as HTMLElement
      contato.classList.add('a-selected')
      contatoResponsive.classList.add('a-selected')
    }
    this.router.navigate([rotaString])
  }

}
