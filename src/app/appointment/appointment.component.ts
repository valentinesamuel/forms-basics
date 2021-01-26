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


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((entryData: Params) => {
      this.user = {
        userName: entryData['username'],
        userMail: entryData['email'],
        userQuestion: entryData['secret'],
      }

    });

  }



  canLeave() {

    if (confirm('You are about leaving the current eoute')) {
      return true;
    } else {
      console.log('false');
      //   return false;
    }

  }

}
