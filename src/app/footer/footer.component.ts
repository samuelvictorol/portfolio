import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  urlLinkedIn = 'https://www.linkedin.com/in/samuel-victor-samvctr/'
  urlGithub = 'https://github.com/samuelvictorol'
  urlInstagram = 'https://www.instagram.com/sxmvctr/'

  logoLink(link: string){
    switch(link){
      case 'linkedin':
        window.open(this.urlLinkedIn,'_blank')
        break;
      case 'github':
        window.open(this.urlGithub,'_blank')
        break;
      case 'instagram':
      window.open(this.urlInstagram,'_blank')
        break;
    }
  }
}
