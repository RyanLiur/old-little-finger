import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLoadingStrategy } from './core/simple-loading-strategy';


const routes: Routes = [
  {
    path: 'error/sys-error',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: SimpleLoadingStrategy,
  })],
  providers: [SimpleLoadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule { }
