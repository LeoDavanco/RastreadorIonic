import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RastreadorPageRoutingModule } from './rastreador-routing.module';

import { RastreadorPage } from './rastreador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RastreadorPageRoutingModule
  ],
  declarations: [RastreadorPage]
})
export class RastreadorPageModule {}
