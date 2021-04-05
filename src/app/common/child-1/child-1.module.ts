import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Child1Page } from './child-1.page';

import { Child1RoutingModule } from './child-1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Child1RoutingModule
  ],
  declarations: [Child1Page]
})
export class Child1Module {}
