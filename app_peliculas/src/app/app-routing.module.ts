import { NgModule, Component } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InformacionComponent } from './components/informacion/informacion.component';


const routes: Routes = [

  { path: '', redirectTo: 'paginacentral', pathMatch: 'full'},
  {path : 'paginacentral', component: SidenavComponent},
  {path : 'info', component: InformacionComponent}


 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
