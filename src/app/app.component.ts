import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { deflateRaw } from 'zlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('form') detialsForm: NgForm;


  onSubmit(data: NgForm) {
    console.log(data);

  }
}
