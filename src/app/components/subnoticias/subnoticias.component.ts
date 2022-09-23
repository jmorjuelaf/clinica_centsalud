import { Component, OnInit } from '@angular/core';
import presentacion from '/src/assets/json/subnoticias.json';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import infodeNoticias from '/src/assets/json/subnoticias.json';
import listacomentarios from '/src/assets/json/subnoticias.json';

@Component({
  selector: 'app-subnoticias',
  templateUrl: './subnoticias.component.html',
  styleUrls: ['./subnoticias.component.css'],
})
export class SubnoticiasComponent implements OnInit {
  title = '¡Noticias en salud!';
  noticias: any = presentacion;
  noticiaSeleccionada: any;
  subtitle = 'Comentarios';
  comentarios: any = listacomentarios;
  datos: any;
  //nombre:any;
  //comentario:any;

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    comentario: new FormControl(''),
  });

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      const nombreNoticia = parametros.get('tituloNoticia');

      if (nombreNoticia) {
        this.seleccionarNoticia(nombreNoticia);
      }
    });
  }
  seleccionarNoticia(titulo: string) {
    for (let noticia of infodeNoticias) {
      if (noticia.tituloNoticia === titulo) {
        this.noticiaSeleccionada = noticia;
        return;
      }
    }
  }
  submit() {
    //  this.nombre=`${this.formularioContacto.value.nombre}`;
    //  console.log(this.nombre.value);
    //  this.comentario=`${this.formularioContacto.value.comentario}`;
    //  console.log(this.comentario.value);
    this.datos = `${this.formularioContacto.value.nombre}
  ${this.formularioContacto.value.comentario}`;
  }
}
