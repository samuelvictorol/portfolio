import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NavServicesService } from '../nav-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(protected navService: NavServicesService, protected router: Router){}

  ngOnInit(): void {
    this.navService.mouseIn('home', false)
  }

  startTrip(rotaString: string) {
    const btnHome = document.querySelector('.home-wrapper') as HTMLElement
    btnHome.style.cssText = 'animation: backOutUp; animation-duration: 1s; --animate-repeat: 0; --animate-delay: 10s;'
    setTimeout(() => {
      this.navService.mouseIn(rotaString, false)
    }, 800)

  }

}
