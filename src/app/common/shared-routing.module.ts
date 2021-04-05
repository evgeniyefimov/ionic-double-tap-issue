import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import('./child-1/child-1.module').then((m) => m.Child1Module),
    path: 'child-1',
  },
  {
    loadChildren: () => import('./child-2/child-2.module').then((m) => m.Child2Module),
    path: 'child-2',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
