import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  titulo: string;

  constructor() { }

  ngOnInit() {
  }

  cambiarTitulo(titulo: string) {
    this.titulo = titulo;
  }

}
