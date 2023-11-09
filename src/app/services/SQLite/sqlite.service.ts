import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {

  constructor(private sqlite: SQLite) { }

  ValidateCert(usuario: string, clave: string): Promise<boolean> {
    return this.createDatabase().then((db: SQLiteObject) => {
      return db.executeSql('SELECT * FROM usuarios WHERE user = ? AND pass = ?', [usuario, clave])
        .then(data => {
          if (data.rows.length > 0) {
            return true;
          } else {
            return false;
          }
        })
        .catch(error => {
          console.error('Error al ejecutar consulta en SQLite', error);
          return false;
        });
    })
    .catch(error => {
      console.error('Error al abrir la base de datos SQLite', error);
      return false; 
    });
  }

  createDatabase() {
    return this.sqlite.create({
      name: 'Registr.db',
      location: 'default'
    });
  }

  createTab() {
    return this.createDatabase().then((db: SQLiteObject) => {
      return db.executeSql(`
        CREATE TABLE IF NOT EXISTS usuarios (
          user TEXT,
          pass TEXT
        )`, [])
        .then(() => {
          console.log('Tabla creada');
        })
        .catch(error => console.error('Error al crear la tabla', error));
    });
  }

  AddCert(usuario: string, clave: string) {
    return this.createDatabase().then((db: SQLiteObject) => {
      return db.executeSql('INSERT INTO usuarios (user, pass) VALUES (?, ?)', [usuario, clave])
        .then(() => {
          console.log('Credencial agregadas');
        })
        .catch(error => console.error('Error al agregar', error));
    });
  }
}
