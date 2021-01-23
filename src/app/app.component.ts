import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('form') detialsForm: NgForm;
  defaultQuestion = "teacher"

  onSubmit(data: NgForm) {
    console.log(this.detialsForm.value.userData.username);
    console.log(this.detialsForm.value.userData.email);
    console.log(this.detialsForm.value.secret);

  }
}
