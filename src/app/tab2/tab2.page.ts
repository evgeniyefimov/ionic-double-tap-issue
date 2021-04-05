import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly navController: NavController,
  ) {}

  onGoToChild1() {
    this.navController.navigateForward(['./child-1'], { relativeTo: this.activatedRoute });
  }

  onGoToChild2() {
    this.navController.navigateForward(['./child-2'], { relativeTo: this.activatedRoute });
  }
}
