import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListardatosComponent } from './components/listardatos/listardatos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MaterialConfig} from './materialconfig';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InformacionComponent } from './components/informacion/informacion.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxFileDropModule } from 'ngx-file-drop';
import { Formulario1Component } from './components/formulario1/formulario1.component';

@NgModule({
  declarations: [
    AppComponent,
    ListardatosComponent,
    SidenavComponent,
    InformacionComponent,
    Formulario1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialConfig,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    }),
    NgxFileDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
