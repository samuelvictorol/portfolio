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
    this.router.navigate([rotaString])
  }

}
