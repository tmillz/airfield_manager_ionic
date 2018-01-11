import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

//@IonicPage()

@Component({
  selector: 'page-links',
  templateUrl: 'links.html'
})
export class LinksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LinksPage, {
      item: item
    });
  }
}
