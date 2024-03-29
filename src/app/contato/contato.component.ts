import { NavServicesService } from './../nav-services.service';
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  angularScript = [
    { isThis: ''}
  ]
  constructor(private navService: NavServicesService){}

  ngOnInit(): void {
    this.navService.mouseIn('contato', false)
  }

    protected sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_wnvn0tx', 'template_t9uy56i', e.target as HTMLFormElement, 'KD15sQJ-xFghabjnw')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      alert('Email Enviado com Sucesso!\nObrigado por entrar em contato :)')
    }, (error) => {
      console.log(error.text);
      alert('Erro :(\nTente Novamente mais tarde!')
    });
    setTimeout(() => {
      var form   = document.querySelector(".contact-form") as HTMLFormElement;
      form.reset();
    }, 2000)
  }
  



}
