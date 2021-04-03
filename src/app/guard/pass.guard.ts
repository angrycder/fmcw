import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';



@Injectable({

  providedIn: 'root'
})
export class PassGuard implements CanActivate {
		constructor(private storage:LocalStorageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !!this.storage.retrieve('user') && (this.storage.retrieve("role")=="pa");
  }
  
}
