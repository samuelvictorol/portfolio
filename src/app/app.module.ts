import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { ConversorComponent } from './conversor/conversor.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'conversor', component: ConversorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent,
    ProjetosComponent,
    ContatoComponent,
    FooterComponent,
    ConversorComponent,
    FooterMobileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
