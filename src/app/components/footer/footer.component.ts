import { Component, OnInit } from '@angular/core';
import infocontacto from '/src/assets/json/contactenos.json';
import { Comentario } from '../../comentario1.model';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contactenos1="Contáctenos";
  escribenos="Escríbenos...";
  contactenos:any=infocontacto;
  comentarios: Comentario[] = [];
  comentarioInput:string = '';
  faUser = faUser;
  constructor() { }

  ngOnInit():void {
    
  }
  agregarComentario(){
    let comentario1 = new Comentario(this.comentarioInput);
    this.comentarios.push( comentario1 );
  }
}
