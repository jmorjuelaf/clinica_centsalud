import { Component, OnInit } from '@angular/core';
import infocontacto from '/src/assets/json/contactenos.json';
import { Comentario } from '../../comentario1.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
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
  constructor() { }

  ngOnInit():void {
    
  }
  agregarComentario(){
    let comentario1 = new Comentario(this.comentarioInput);
    this.comentarios.push( comentario1 );
  }
  
}
