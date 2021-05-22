import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'screen5',
    loadChildren: () => import('./view2/screen5/screen5.module').then( m => m.Screen5PageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./shared/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'ionic-grid',
    loadChildren: () => import('./view2/ionic-grid/ionic-grid.module').then( m => m.IonicGridPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./view2/ionic-grid/ionic-grid.module').then( m => m.IonicGridPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
