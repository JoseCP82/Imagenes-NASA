import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageService } from '../services/image.service';

@Injectable({
  providedIn: 'root'
})
export class DetailGuard implements CanActivate {

  constructor(private _imageService: ImageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._imageService.getFlag();
  }
  
}
