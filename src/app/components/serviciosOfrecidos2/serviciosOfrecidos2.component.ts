import { Component, OnInit } from '@angular/core';

import listadeEspecialidades from '/src/assets/json/especialidades.json';

@Component({
  selector: 'app-serviciosOfrecidos2',
  templateUrl: './serviciosOfrecidos2.component.html',
  styleUrls: ['./serviciosOfrecidos2.component.css']
})
export class ServiciosOfrecidos2Component implements OnInit {

  especialidades: any = listadeEspecialidades;

  constructor() { }

  ngOnInit() {
  }

}
