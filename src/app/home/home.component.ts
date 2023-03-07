import { Component } from '@angular/core';
import { NavServicesService } from '../nav-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(protected navService: NavServicesService){}

  ngOnInit(): void {
    this.navService.mouseIn('home', false)
  }
}
