import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-1',
  templateUrl: 'child-1.page.html',
})
export class Child1Page {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly navController: NavController,
  ) {}

  onGoToChild2() {
    this.navController.navigateForward(['../child-2'], { relativeTo: this.activatedRoute });
  }
}
