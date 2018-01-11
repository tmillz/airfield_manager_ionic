import { Component } from '@angular/core';

import { MarkersPage } from '../markers/markers';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = MarkersPage;

  constructor() {

  }
}