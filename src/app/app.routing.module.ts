import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

import { OrderContainerComponent } from './order-container/order-container.component';

import { UserContainerComponent } from './user-container/user-container.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserContainerComponent,
  },
  {
    path: 'order',
    component: OrderContainerComponent,
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
