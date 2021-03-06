import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { rejects } from 'assert';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  text='loremaisgnthbgskbhfwlbtrqbvlaaaaaaaklbdlfbvadiubfvjzbj'
  // @ViewChild('form') detialsForm: NgForm;
  reactiveForm: FormGroup;
  sent = false;
  takenUserNames = ['Musa', 'Tunde', 'Omonigho', 'Eshoka', 'Osakpolor']
  defaultQuestion = "teacher";
  user = {
    userName: "",
    mail: "",
    secretQuestion: "",
  }

  getControls() {
    return (<FormArray>this.reactiveForm.get('hobbies')).controls;
  }

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', [Validators.required, Validators.minLength(3), this.takenUsernames.bind(this)]),
        'email': new FormControl(null, [Validators.required], this.forbiddenEmails),
      }),
      'question': new FormControl('teacher'),
      'agreement': new FormControl(null),
      'hobbies': new FormArray([]),
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('hobbies')).push(control);
  }
  onSubmit() {
    this.user = {
      userName: this.reactiveForm.value.userData.username,
      mail: this.reactiveForm.value.userData.email,
      secretQuestion: this.reactiveForm.value.question,
    }

    this.router.navigate(['appointment', this.user.userName, this.user.mail, this.user.secretQuestion], { relativeTo: this.route });
    // this.detialsForm.reset();
    // this.sent = true;

    // this.user = {
    //   userName: this.reactiveForm.userData.username,
    //   mail: this.reactiveForm.userData.email,
    //   secretQuestion: reactiveForm.question
    // }

    console.log(this.reactiveForm);

  }
  goingBack() {
    this.sent = false;
  }

  takenUsernames(control: FormControl): { [s: string]: boolean } {
    if (this.takenUserNames.includes(control.value)) {
      return { alreadyChosen: true }
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "test@test.com") {
          resolve({ 'emailIsForbidden': true });
        } else
          resolve(null);
      }, 1000)
    })
    return promise;
  }

}
