import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

import { IonicGridPage } from './ionic-grid.page';

const routes: Routes = [
  {
    path: '',
    component: IonicGridPage
  },
  {
    path: 'grid',
    component:GridComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicGridPageRoutingModule {}
