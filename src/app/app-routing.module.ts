import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'sedes',
    component:SedesComponent
  },
  {
    path:'noticias',
    component:NoticiasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }