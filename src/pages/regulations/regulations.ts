import { Component, ChangeDetectorRef} from '@angular/core';
import { NavController, NavParams, Content, IonicPage } from 'ionic-angular';

//@IonicPage()

@Component({
  selector: 'page-regulations',
  templateUrl: 'regulations.html'
})

export class RegulationsPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;
  showToolbar:boolean = false;
  headerImgSize:string = '100%';
  headerImgUrl:string = '';
  transition:boolean = false;


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
    ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [
      { title: 'AFIs: Air Force Instructions' },
      { title: 'UFCs: Unified Facility Criteria' },
      { title: 'ETLs: Engineering Technical Letters' },
      { title: 'FAA: Federal Aviation Administration' },
      { title: 'MAJCOM Supplements' }
    ];

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RegulationsPage, {
      item: item
    });
  }

}
