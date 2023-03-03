import { Router } from '@angular/router';
import { NavServicesService } from './../../nav-services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent {
  toggleWrapper = false
  input: any
  
  constructor(protected router: Router, protected navService: NavServicesService) {}

  ngOnInit(): void {
    this.navService.toggleHideNav(false)    
  }

  voltar(){
    this.navService.toggleHideNav(true)    
    this.router.navigate(['portfolio'])
  }
  converter() {
    const input = document.querySelector('.conversor-input') as HTMLInputElement
    if(input.value.includes('.com')){
      this.input = input.value
      this.toggleWrappers()
    } else {
      input.value = 'Digite um link válido'
      input.select()
    }
  }
  
  toggleWrappers () {
    this.toggleWrapper = !this.toggleWrapper
    let frameString = `<iframe id="widgetv2Api" src="https://convert2mp3s.com/api/widgetv2?url=${this.input}" width="100%" height="100%" allowtransparency="true" scrolling="yes" style="border:none"></iframe>`
    const btnConvertAgain = document.querySelector('#btn-convert-again') as HTMLElement
    const convertWrapper = document.querySelector('#convert-wrapper') as HTMLElement
    if(this.toggleWrapper) {
      convertWrapper.innerHTML = frameString
      btnConvertAgain.style.visibility = 'visible'
    } else {
      document.location.reload();
    }
  }

  help() {
    alert('Conversor de links de vídeos para MP3 - MP4\n------------------------------------------------\nInsira o link do vídeo que deseja converter e clique em converter.\nSuporta links de vídeos do: YouTube, SoundCloud, Facebook, Twitter, Instagram, TikTok, Vimeo, Dailymotion, VK, ou AOL Video URL')
  }

}
