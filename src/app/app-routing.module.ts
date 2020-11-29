import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules
} from '@angular/router';


const routes: Routes = [
  {
    path: 'index',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
