import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog',
  template: `
    <p>
      Hola {{ data }}
    </p>
    <button md-raised-button color="primary" [md-dialog-close]="true">OK!</button>
  `,
  styles: []
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
