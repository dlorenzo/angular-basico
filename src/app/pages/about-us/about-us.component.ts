import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MensajeroService } from '../../mensajero.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  mensajes: string[];

  constructor(private mensajero: MensajeroService) { }

  ngOnInit() {
    this.mensajes = this.mensajero.obtenerMensajes();
  }

}
