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
  agreed = 'yes';
  onSubmit() {
    // console.log(this.detialsForm.value.userData.username);
    // console.log(this.detialsForm.value.userData.email);
    // console.log(this.detialsForm.value.secret);
    console.log(this.detialsForm.value.flexRadioDefault);

  }
}
