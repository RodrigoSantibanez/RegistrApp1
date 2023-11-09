import { Component } from '@angular/core';
import { SQLiteService } from './services/SQLite/sqlite.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private sqliteService: SQLiteService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.sqliteService.createTab().then(() => {
        this.sqliteService.AddCert('Rodrigo', '12345');
        console.log('Credenciales insertadas');
        console.log('busca esto')
      });
    });
  }
}
