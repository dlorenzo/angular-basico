import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

  nombre: string;

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  alertSaludar() {
    const self = this;

    self.dialog.open(DialogComponent, {
      data: self.nombre,
    });

  }

}
