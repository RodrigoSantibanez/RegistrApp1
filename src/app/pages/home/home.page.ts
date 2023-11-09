import { Component } from '@angular/core';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string | null = null;

  constructor(
    private authService : authService
    ) {}

    ngOnInit(){
      this.usuario = this.authService.getUsername();
    }
}
