import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  linkInput?: string;
  showCloseBtn?: boolean;

  constructor() { }

  ngOnInit(): void {
    const disableNav = document.querySelector('.nav-wrapper') as HTMLElement
    disableNav.style.visibility = 'hidden'
    this.showCloseBtn = false
      setTimeout(() =>{
        this.help()
      }, 2000)
  }

  convert(ev: Event) {
    ev.preventDefault()
    this.linkInput = document.querySelector('input')?.value
    if(!this.linkInput?.includes('.com')){
      alert('Digite um link válido!')
      return
    }
    const element = document.querySelector('.resultado') as HTMLElement
    const bcWrapper = document.querySelector('.wrapper') as HTMLElement
    bcWrapper.style.cssText = 'filter: blur(8px);'
    element.style.cssText = 'visibility: visible;'
    element.innerHTML =  `<iframe id="widgetv2Api" src="https://convert2mp3s.com/api/widgetv2?url=${this.linkInput}"
    width="100%" height="100%" allowtransparency="true" style="border:none, border-radius: 10px;"></iframe>`
    this.showCloseBtn = true
    }

    help(){
      alert('Copie o link do vídeo que deseja, cole no campo e clique em converter.' +
      '\nSuporta links de vídeos do(a):\nYouTube - SoundCloud - Facebook - Twitter - Instagram\nTikTok - Vimeo - Dailymotion - VK - AOL Video URL' +
      '\n____________________________________________________________________' +
      '\nFeito por:\nSamuel Victor - samuelvictorol.github.io/portfolio' +
      '\nCréditos e API Disponível em:\ngithub.com/matthew-asuncion/Fast-YouTube-to-MP3-Converter-API'
      )
    }

    closeResult(){
      const bcWrapper = document.querySelector('.wrapper') as HTMLElement
      bcWrapper.style.cssText = 'filter: grayscale(0)' + 'filter: blur(0);'
      const res = document.querySelector('.resultado') as HTMLElement
      res.style.cssText = 'visibility: hidden;'
      this.showCloseBtn = !this.showCloseBtn;
      const element = document.querySelector('iframe') as HTMLElement;
      if(element.parentNode){
        element.parentNode.removeChild(element);
      }
    }

}



