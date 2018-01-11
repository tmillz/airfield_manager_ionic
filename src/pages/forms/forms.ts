import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AfldInspPage } from '../afldinsp/afldinsp';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

//@IonicPage()

@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html'
})
export class FormsPage {

  afldinspPage = AfldInspPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
