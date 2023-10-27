import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnauthorizedPageRoutingModule } from './unauthorized-routing.module';

import { UnauthorizedPage } from './unauthorized.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnauthorizedPageRoutingModule,
    SharedModule
  ],
  declarations: [UnauthorizedPage]
})
export class UnauthorizedPageModule {}
