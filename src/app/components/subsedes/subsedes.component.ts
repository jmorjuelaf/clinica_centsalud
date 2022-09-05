import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import infodeSedes from '/src/assets/json/subsedes.json';

@Component({
  selector: 'app-subsedes',
  templateUrl: './subsedes.component.html',
  styleUrls: ['./subsedes.component.css']
})
export class SubsedesComponent implements OnInit {

  sedeSeleccionada: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      const nombreSede = parametros.get("nombre_sede");

      if (nombreSede) {
        this.seleccionarSede(nombreSede)
      }
    })
  }
  seleccionarSede(nombre: string) {
    for (let sede of infodeSedes) {
      if (sede.nombre_sede === nombre) {
        this.sedeSeleccionada = sede
        return
      }
    }

  }
}




 