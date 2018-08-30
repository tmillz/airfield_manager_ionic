import { Component } from '@angular/core';
import { MarkersPage } from '../markers/markers';
import { MapPage } from '../map/map';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'MapPage';
  tab2Root = 'MarkersPage';

  constructor() {

  }
}