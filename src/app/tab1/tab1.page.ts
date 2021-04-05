import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private readonly navController: NavController,
  ) {}

  onGoToChild1() {
    this.navController.navigateForward('/tabs/tab1/child-1');
  }

  onGoToChild2() {
    this.navController.navigateForward('/tabs/tab1/child-2');
  }
}
