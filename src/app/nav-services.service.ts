import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServicesService {
  toggleDarkMode = false

  constructor() { }

  darkMode() {
    this.toggleDarkMode = !this.toggleDarkMode
    this.darkModeExec()
  }

  darkModeExec() {
    const html = document.querySelector('html') as HTMLElement
    const imgSobre = document.querySelector('.img-sobre') as HTMLImageElement
    if(this.toggleDarkMode) {
      html.style.cssText = 'filter: invert(100%);'
      imgSobre.style.cssText = 'filter: none; filter: brightness(0);'
    }else {
      html.style.cssText = 'filter: none'
      imgSobre.style.cssText = 'filter: none'
    }
  }
}
