import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiciosOfrecidosComponent } from './components/serviciosOfrecidos/serviciosOfrecidos.component';
import { ServiciosOfrecidos2Component } from './components/serviciosOfrecidos2/serviciosOfrecidos2.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ProcedimientosComponent } from './components/procedimientos/procedimientos.component';


@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    NosotrosComponent,
    SedesComponent,
    NoticiasComponent,
    InicioComponent,
    ServiciosComponent,
    ServiciosOfrecidosComponent,
    ServiciosOfrecidos2Component,
    EspecialidadesComponent,
    ProcedimientosComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }