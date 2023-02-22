import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  toggleDarkMode = false
  toggleResposiveNav = false

  constructor (private router: Router) {}

  darkMode() {
    this.toggleDarkMode = !this.toggleDarkMode
    const html = document.querySelector('html') as HTMLElement
    if(this.toggleDarkMode) {
      html.style.cssText = 'filter: invert(100%);'
    }else {
      html.style.cssText = 'filter: none'
    }
  }

  cleanMargin(){
    const home = document.querySelector('#home') as HTMLElement
    const portfolio = document.querySelector('#portfolio') as HTMLElement
    const sobre = document.querySelector('#sobre') as HTMLElement
    const contato = document.querySelector('#contato') as HTMLElement
    home.classList.remove('a-selected')
    portfolio.classList.remove('a-selected')
    sobre.classList.remove('a-selected')
    contato.classList.remove('a-selected')
  }

  mouseIn(rotaString: string) {
    this.cleanMargin()
    if(rotaString === 'home') {
      const home = document.querySelector('#home') as HTMLElement
      home.classList.add('a-selected')
    } else if(rotaString === 'portfolio'){
      const portfolio = document.querySelector('#portfolio') as HTMLElement
      portfolio.classList.add('a-selected')
    } else if(rotaString === 'sobre') {
      const sobre = document.querySelector('#sobre') as HTMLElement
      sobre.classList.add('a-selected')
    } else {
      const contato = document.querySelector('#contato') as HTMLElement
      contato.classList.add('a-selected')
    }
    this.router.navigate([rotaString])
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
}
