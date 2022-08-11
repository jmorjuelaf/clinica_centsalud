import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
  }
  links = ['./inicio', './servicios', './nosotros','./sedes','./noticias','./contactenos',];
  menu = ['Inicio', 'Servicios', 'Nosotros','Sedes','Noticias','Contáctenos'];
  activeLink = this.links[1];
} 