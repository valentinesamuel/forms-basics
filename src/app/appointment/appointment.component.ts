import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  user = {
    userName: "",
    userMail: "",
    userQuestion: "",
  }

  userCopied = {
    userName: "",
    userMail: "",
    userQuestion: "",
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((entryData: Params) => {
      this.user = {
        userName: entryData['username'],
        userMail: entryData['email'],
        userQuestion: entryData['secret'],
      }
      //implement can deactivate guard here
      this.userCopied = { ...this.user }

    });

  }



  canLeave() {
    // if (confirm('leaving the appointment component')) {
    //   return true;
    // } else {
    //   console.log('false');
    //   return false;
    // }
    if (confirm('leaving the appointment component') || this.user.userMail !== this.userCopied.userMail) {
      return true;
    } else {
      console.log('false');
      //   return false;
    }

  }

}
