import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  ngOnInit() {
  }
  links = ['./especialidades', './procedimientos'];
  menu = ['Especialidades', 'Procedimientos'];
  activeLink = this.links[1];
} 
