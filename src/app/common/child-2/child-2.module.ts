import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Page } from './child-2.page';

import { Child2RoutingModule } from './child-2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Child2RoutingModule,
  ],
  declarations: [Child2Page]
})
export class Child2Module {}
