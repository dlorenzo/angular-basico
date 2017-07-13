import { Component, OnInit } from '@angular/core';
import { MensajeroService } from '../../mensajero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bienvenida: string;
  mensaje: string;

  constructor(private mensajero: MensajeroService) { }

  ngOnInit() {
    // Definición de variables
    let variable: string;
    variable = 'Bienvenido a un proyecto de Angular';

    this.bienvenida = variable;
  }

  enviarMensaje() {
    this.mensajero.fijarMensaje(this.mensaje);
    this.mensaje = '';
  }

}
