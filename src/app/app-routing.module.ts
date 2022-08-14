import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProcedimientosComponent } from './components/procedimientos/procedimientos.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiciosOfrecidosComponent } from './components/serviciosOfrecidos/serviciosOfrecidos.component';
import { ServiciosOfrecidos2Component } from './components/serviciosOfrecidos2/serviciosOfrecidos2.component';


const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'serviciosOfrecidos',
    component:ServiciosOfrecidosComponent
  },
  {
    path:'serviciosOfrecidos2',
    component:ServiciosOfrecidos2Component
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    children: [
    {
      path: 'especialidades',
      component: EspecialidadesComponent
    },
    {
      path: 'procedimientos',
      component: ProcedimientosComponent
    }
  ]
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
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }