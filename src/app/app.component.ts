import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';


  ngOnInit() {
    setTimeout(() => {
      alert('Portfólio em Construção... :)')

    }, 1200)
  }


}

