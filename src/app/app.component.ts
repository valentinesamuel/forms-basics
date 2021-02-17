import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('form') detialsForm: NgForm;
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
        'username': new FormControl(null),
        'email': new FormControl(null),
      }),
      'question': new FormControl('teacher'),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm)
    // this.user = {
    //   userName: this.detialsForm.value.userData.username,
    //   mail: this.detialsForm.value.userData.email,
    //   secretQuestion: this.detialsForm.value.secret,
    // }
    // this.router.navigate(['appointment', this.user.userName, this.user.mail, this.user.secretQuestion], { relativeTo: this.route });

    // this.detialsForm.reset();
    // this.sent = true;
  }
  goingBack() {
    this.sent = false;
  }

}
