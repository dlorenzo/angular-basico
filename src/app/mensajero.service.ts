import { Injectable } from '@angular/core';

@Injectable()
export class MensajeroService {

  mensajes: string[] = [];

  constructor() { }

  fijarMensaje(mensaje: string): void {
    this.mensajes.push(mensaje);
  }

  obtenerMensajes(): string[] {
    return this.mensajes;
  }

}
