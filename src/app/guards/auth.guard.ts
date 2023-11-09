import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PassedLog } from '../services/PassedLog/passed-log.service';
import { AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private serviceGuard: PassedLog,
    private alertController : AlertController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      


    if (this.serviceGuard.PassedLogin()) {
      return true;
    } else {
      console.log('no has pasado por un log')
      this.showAlert('Error', 'Debes pasar por el login para ingresar')
      return this.router.parseUrl('/login');
    }
  }

  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
