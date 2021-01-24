import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('form') detialsForm: NgForm;
  defaultQuestion = "teacher";
  user = {
    userName: "",
    mail: "",
    secretQuestion: "",

  }

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  onSubmit() {
    this.user = {
      userName: this.detialsForm.value.userData.username,
      mail: this.detialsForm.value.userData.email,
      secretQuestion: this.detialsForm.value.secret,
    }
    this.router.navigate(['appointment', this.user.userName, this.user.mail, this.user.secretQuestion], { relativeTo: this.route });
    // console.log(this.detialsForm.value.userData.username);
    // console.log(this.detialsForm.value.userData.email);
    console.log(this.detialsForm.value);
    if (!this.detialsForm.value.flexRadioDefault) {
      alert('Please check the box to continue');
    } else {
      console.log(this.detialsForm.value.flexRadioDefault);
    }

  }
}
