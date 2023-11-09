import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { SQLiteService } from 'src/app/services/SQLite/sqlite.service';
import { PassedLog } from 'src/app/services/PassedLog/passed-log.service';
import { authService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  constructor( 
    private router : Router,
    private alertController : AlertController,
    private sqliteService : SQLiteService,
    private passedLog : PassedLog,
    private authService : authService
  ) { }

  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async validateLog() {
    const usuario = (document.querySelector('input[name="User"]') as HTMLInputElement).value;
    const clave = (document.querySelector('input[name="Pass"]') as HTMLInputElement).value;

    if (!usuario || !clave){
      this.showAlert('Advertencia','Los campos no pueden estar vacios');
    } 

    this.sqliteService.ValidateCert(usuario, clave).then((validate)=>{
      this.authService.setUsername(usuario);
      if (validate) {
        this.router.navigate(['/home'])
        this.passedLog.setPassedLogin(true);
      }else{
        this.showAlert('advertencia', 'Credenciales incorrectas')
      }
    })
  
  }
  ngOnInit() {
    
  }
  
  navigateToMenu(){
    this.router.navigate(['/home'])
  }  

}