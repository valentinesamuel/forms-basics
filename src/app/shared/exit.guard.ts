import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface FormDeactivateGuard {
  canLeave: () => boolean | Promise<boolean> | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<FormDeactivateGuard> {
  canDeactivate(component: FormDeactivateGuard, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    return component.canLeave();
  }
}
