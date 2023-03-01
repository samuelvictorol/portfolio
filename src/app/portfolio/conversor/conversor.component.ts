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
    this.toggleWrappers(input.value)
  }
  
  toggleWrappers (inputValue: string) {
    this.toggleWrapper = !this.toggleWrapper
    const closeFrameBtn = document.querySelector('.close-frame-btn') as HTMLElement
    let frame = `<iframe id="widgetv2Api" src="https://convert2mp3s.com/api/widgetv2?url=${inputValue}" width="100%" height="100%" allowtransparency="true" scrolling="yes" style="border:none"></iframe>`
    const convertWrapper = document.querySelector('#convert-wrapper') as HTMLElement
    if(this.toggleWrapper) {
      convertWrapper.innerHTML = frame
    } else {
    }
  }

}
