import { NavServicesService } from './../nav-services.service';
import { NavComponent } from './../nav/nav.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent{
  constructor(protected navService: NavServicesService) {
  }
  ngOnInit(): void {
    this.navService.darkModeExec()
    this.navService.mouseIn('sobre', false)
  }
  


}
