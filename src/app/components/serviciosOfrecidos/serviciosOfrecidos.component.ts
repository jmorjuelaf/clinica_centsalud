import { Component, OnInit } from '@angular/core';

// Importar el archivo JSON 

import listadeEspecialidades from '/src/assets/json/especialidades.json';


@Component({
  selector: 'app-serviciosOfrecidos',
  templateUrl: './serviciosOfrecidos.component.html',
  styleUrls: ['./serviciosOfrecidos.component.css']
})
export class ServiciosOfrecidosComponent {

  especialidades: any = listadeEspecialidades;


}
