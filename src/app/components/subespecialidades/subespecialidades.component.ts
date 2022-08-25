import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import listadeEspecialidades from '/src/assets/json/especialidades.json';


@Component({
  selector: 'app-subespecialidades',
  templateUrl: './subespecialidades.component.html',
  styleUrls: ['./subespecialidades.component.css']
})
export class SubespecialidadesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  nombre_servicio: any=listadeEspecialidades;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nombre_servicio = parseInt(parametros.get("nombre_servicio")!);

    })
  }
}
