import { Component, OnInit } from '@angular/core';
import presentacion from '/src/assets/json/subnoticias.json';
import { ActivatedRoute, ParamMap } from '@angular/router';
import infodeNoticias from '/src/assets/json/subnoticias.json';
import { Comentario } from '../../comentario.model';

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

  comentarios: Comentario[] = [];
  nombreInput: any = '';
  comentarioInput: any = '';
  console = console;

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
  agregarComentario() {
    let comentario1 = new Comentario(this.nombreInput, this.comentarioInput);
    this.comentarios.push(comentario1);
    if(this.comentarios!=null){
      console.log("Favor llenar el formulario")
    }
  }
  
}
