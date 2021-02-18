import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ViewChild('form') detialsForm: NgForm;
  reactiveForm: FormGroup;
  sent = false;
  defaultQuestion = "teacher";
  user = {
    userName: "",
    mail: "",
    secretQuestion: "",
  }

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null),
      }),
      'question': new FormControl('teacher'),
    });
  }

  onSubmit() {
    this.user = {
      userName: this.reactiveForm.value.userData.username,
      mail: this.reactiveForm.value.userData.email,
      secretQuestion: this.reactiveForm.value.question,
    }
    // console.log(this.reactiveForm.value.question);

    this.router.navigate(['appointment', this.user.userName, this.user.mail, this.user.secretQuestion], { relativeTo: this.route });

    // this.detialsForm.reset();
    // this.sent = true;

    // this.user = {
    //   userName: this.reactiveForm.userData.username,
    //   mail: this.reactiveForm.userData.email,
    //   secretQuestion: reactiveForm.question
    // }
  }
  goingBack() {
    this.sent = false;
  }

}
