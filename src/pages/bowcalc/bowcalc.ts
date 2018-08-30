import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

@Component({
  selector: 'page-bowcalc',
  templateUrl: 'bowcalc.html'
})
export class BowCalcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BowCalcPage, {
      item: item
    });
  }
}
