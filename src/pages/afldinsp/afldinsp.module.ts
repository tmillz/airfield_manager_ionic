import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import { AfldInspPage } from './afldinsp';

@NgModule({
  declarations: [
    AfldInspPage
  ],
  imports: [
    IonicPageModule.forChild(AfldInspPage)
  ],
  entryComponents: [
    AfldInspPage
  ]
})
export class AfldInspPageModule {}