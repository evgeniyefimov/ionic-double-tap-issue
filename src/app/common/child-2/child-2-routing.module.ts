import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child2Page } from './child-2.page';

const routes: Routes = [
  {
    path: '',
    component: Child2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child2RoutingModule {}
