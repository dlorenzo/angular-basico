import { Component, OnInit } from '@angular/core';
import { MensajeroService } from '../../mensajero.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  mensajes: string[];

  constructor(private mensajero: MensajeroService) { }

  ngOnInit() {
    this.mensajes = this.mensajero.obtenerMensajes();
  }

}
