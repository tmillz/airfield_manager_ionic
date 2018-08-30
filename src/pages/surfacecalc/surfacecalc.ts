import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

@Component({
  selector: 'page-surfacecalc',
  templateUrl: 'surfacecalc.html'
})
export class SurfaceCalcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SurfaceCalcPage, {
      item: item
    });
  }
}
