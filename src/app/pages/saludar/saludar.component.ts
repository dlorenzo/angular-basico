import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  nombre: string;

  constructor() { }

  ngOnInit() {
  }

  alertSaludar() {
    alert(this.nombre);
  }

}
