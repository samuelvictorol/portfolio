import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  linkInput?: string;

  constructor() { }

  ngOnInit(): void {
    const disableNav = document.querySelector('.nav-wrapper') as HTMLElement
    disableNav.style.display = 'none'

  }

  convert(){
    this.linkInput = document.querySelector('input')?.value
    let element = document.querySelector('.resultado') as HTMLElement
    element.style.cssText = 'visibility: visible;'
    element.innerHTML =  `<iframe id="widgetv2Api" src="https://convert2mp3s.com/api/widgetv2?url=${this.linkInput}"
    width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none, border-radius: 10px;"></iframe>`

    }

    help(){
      alert('Insira o link do vídeo e clique em converter. Suporta:' +
      '\n_______________________________________________________________' +
      '\nYouTube, SoundCloud, Facebook, Twitter, Instagram,\n TikTok, Vimeo, Dailymotion, VK, e AOL Video URL')
    }
}



