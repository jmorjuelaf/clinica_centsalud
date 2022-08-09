import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiciosOfrecidosComponent } from './components/serviciosOfrecidos/serviciosOfrecidos.component';



@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ServiciosComponent,
    NosotrosComponent,
    SedesComponent,
    NoticiasComponent,
    ServiciosOfrecidosComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }