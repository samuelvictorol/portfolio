import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavServicesService {
  toggleDarkMode = false
  toggleResposiveNav = true

  constructor(private router: Router) { }

  darkMode() {
    this.toggleDarkMode = !this.toggleDarkMode
    this.darkModeExec()
  }

  darkModeExec() {
    const html = document.querySelector('html') as HTMLElement
    const imgSobre = document.querySelector('.img-sobre') as HTMLElement
    if(this.toggleDarkMode) {
      html.style.cssText = 'filter: invert(.9);'
      imgSobre.style.cssText = 'filter: invert(1)'
    }else {
      html.style.cssText = 'filter: none'
      imgSobre.style.cssText = 'filter: none'

    }
  }

  responsiveNav() {
    this.toggleResposiveNav = !this.toggleResposiveNav
    const traceWrapper = document.querySelector('.trace-wrapper') as HTMLElement
    const navResponsive = document.querySelector('.nav-responsive') as HTMLElement
    if(this.toggleResposiveNav) {
      navResponsive.style.cssText = 'right: 0rem'
      traceWrapper.style.cssText = 'transform: rotate(90deg)'
    } else {
      navResponsive.style.cssText = 'right: -100rem'
      traceWrapper.style.cssText = 'transform: rotate(-180deg)'
    }
  }

  minimizeNavResponsive() {
    setTimeout(() => {
      const traceWrapper = document.querySelector('.trace-wrapper') as HTMLElement
      const navResponsive = document.querySelector('.nav-responsive') as HTMLElement
      this.toggleResposiveNav = !this.toggleResposiveNav
      traceWrapper.style.cssText = 'transform: rotate(180deg)'
      navResponsive.style.cssText = 'right: -100rem'
    }, 120)
  }

  toggleHideNav(showNav: boolean) {
    const navWrapper = document.querySelector('.nav-wrapper') as HTMLElement
    if(showNav) {
      navWrapper.style.cssText = 'visibility: visible; z-index:999;'
    } else {
      navWrapper.style.cssText = 'z-index: -999;'
    }
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
      this.minimizeNavResponsive()
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
    } else if(rotaString === 'contato'){
      const contato = document.querySelector('#contato') as HTMLElement
      const contatoResponsive = document.querySelector('#contato-responsive') as HTMLElement
      contato.classList.add('a-selected')
      contatoResponsive.classList.add('a-selected')
    }
    this.router.navigate([rotaString])
  }

}
