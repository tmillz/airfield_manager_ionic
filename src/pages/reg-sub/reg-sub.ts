import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reg-sub',
  templateUrl: 'reg-sub.html',
})
export class RegSubPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    
  }

  goToPage(event, content){
     window.open(content);
  }

}
