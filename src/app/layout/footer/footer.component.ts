import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output()
  tituloDesdeFooter = new EventEmitter<string>();

  tituloCabecera: string;

  constructor() { }

  ngOnInit() {
  }

  cambiarTituloCabecera() {
    this.tituloDesdeFooter.emit(this.tituloCabecera);
  }

}
