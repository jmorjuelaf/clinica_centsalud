import { Component, OnInit } from '@angular/core';

// Importar el archivo JSON 

import menuEspecialidades from '/src/assets/json/tabs.json';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  title = '¡Especialistas en salud!';
  tabs: any = menuEspecialidades;

  constructor() { }

  ngOnInit() {
  }

}
