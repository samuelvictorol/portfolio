import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServicesService {
  toggleDarkMode = false
  toggleResposiveNav = true

  constructor() { }

  darkMode() {
    this.toggleDarkMode = !this.toggleDarkMode
    this.darkModeExec()
  }

  darkModeExec() {
    const html = document.querySelector('html') as HTMLElement
    const imgSobre = document.querySelector('.img-sobre') as HTMLElement
    if(this.toggleDarkMode) {
      html.style.cssText = 'filter: invert(.9);'
      imgSobre.style.cssText = 'filter: none; filter: brightness(0);'
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
      navWrapper.style.cssText = 'visibility: hidden; z-index: -999;'
    }
  }

}
