import { ContatoComponent } from './contato/contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ConversorComponent } from './portfolio/conversor/conversor.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'sobre', component: SobreComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'contato', component: ContatoComponent},
  {path:'conversor', component: ConversorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }