import { Formulario1Component } from './components/formulario1/formulario1.component';

import { NgModule, Component } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ContenidoComponent } from './components/contenido/contenido.component';


const routes: Routes = [

  { path: '', redirectTo: 'contenido', pathMatch: 'full'},
  {path : 'paginacentral', component: SidenavComponent},
  {path : 'info', component: InformacionComponent},
  {path : 'contenido', component: ContenidoComponent},
  {path : 'miformulario', component: Formulario1Component}


 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
