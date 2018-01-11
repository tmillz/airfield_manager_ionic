import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-afldinsp',
  templateUrl: 'afldinsp.html'
})
export class AfldInspPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AfldInspPage, {
      item: item
    });
  }
}
