import { NavServicesService } from './../nav-services.service';
import { NavComponent } from './../nav/nav.component';
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent{
  saudacao = ''
  scroll = false

  constructor(protected navService: NavServicesService) {
  }
  ngOnInit(): void {
    this.getHour()
    this.navService.mouseIn('sobre', false)
  }

  getHour(){
    var dataHoje = new Date()
    var horas = dataHoje.getHours()

    if(horas >= 0 && horas <= 5) {
      this.saudacao = 'Boa Madrugada'
    } else if(horas >= 6 && horas <= 12){
      this.saudacao = 'Bom Dia'
    } else if(horas >= 13 && horas <= 18){
      this.saudacao = 'Boa Tarde'
    } else if(horas >= 19 && horas <= 23) {
      this.saudacao = 'Boa Noite'
    }

  }

  baixarCV(){
    const pdfUrl = 'assets/cv.pdf'
    window.open(pdfUrl, '_blank');
  }

}
