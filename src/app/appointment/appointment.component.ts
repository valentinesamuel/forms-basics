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
      console.log(this.userCopied = { ...this.user })

    });

  }

}
