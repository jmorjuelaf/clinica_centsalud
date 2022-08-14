import { Component, OnInit } from '@angular/core';

// Importar el archivo JSON 

import listadeEspecialidades from '/src/assets/json/especialidades.json';

@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.css']
})
export class ProcedimientosComponent implements OnInit {

  especialidades: any = listadeEspecialidades;

  constructor() { }

  ngOnInit() {
  }

}
