import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadMainFootLayoutComponent } from './head-main-foot-layout/head-main-foot-layout.component';
import { PageNotFoundComponent } from 'src/app/error/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HeadMainFootLayoutComponent,
    children: [
      // preload module
      {
        path: 'customers',
        loadChildren: 'src/app/feature/customers/customers.module#CustomersModule',
        data: {
          preload: true
        }
      },
      // not preload module
      {
        path: 'orders',
        loadChildren: 'src/app/feature/orders/orders.module#OrdersModule',
        data: {
          preload: false
        }
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
