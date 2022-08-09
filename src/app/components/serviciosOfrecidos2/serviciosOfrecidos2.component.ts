import { Component, OnInit } from '@angular/core';

// Importar el archivo JSON 

import listadeEspecialidades from '/src/assets/json/especialidades.json';

@Component({
  selector: 'app-serviciosOfrecidos2',
  templateUrl: './serviciosOfrecidos2.component.html',
  styleUrls: ['./serviciosOfrecidos2.component.css']
})
export class ServiciosOfrecidos2Component {

  especialidades: any = listadeEspecialidades;


}
