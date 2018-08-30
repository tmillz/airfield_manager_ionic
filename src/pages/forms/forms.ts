import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html'
})
export class FormsPage {
  loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

  }

  openInspForm(){
    this.navCtrl.push('AfldInspPage');
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }

}
