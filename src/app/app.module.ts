import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'contato', component: ContatoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent,
    ProjetosComponent,
    ContatoComponent,
    FooterComponent
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
