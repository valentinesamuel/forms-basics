import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { ExitGuard } from './shared/exit.guard';

const routes: Routes = [
  { path: 'appointment/:username/:email/:secret', component: AppointmentComponent, canDeactivate: [ExitGuard] },
  { path: '**', redirectTo: 'erv' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
