import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import { MarkersPage } from './markers';

@NgModule({
  declarations: [
    MarkersPage
  ],
  imports: [
    IonicPageModule.forChild(MarkersPage)
  ],
  entryComponents: [
    MarkersPage
  ]
})
export class MarkersPageModule {}