import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: 'appointment/:username/:email/:secret', component: AppointmentComponent }, 
  { path: 'erv', component: AppComponent },
  { path: '**', redirectTo: 'erv' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
