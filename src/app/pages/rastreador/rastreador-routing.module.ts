import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RastreadorPage } from './rastreador.page';

const routes: Routes = [
  {
    path: '',
    component: RastreadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RastreadorPageRoutingModule {}
