import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import { AircraftPage } from './aircraft';

@NgModule({
  declarations: [
    AircraftPage
  ],
  imports: [
    IonicPageModule.forChild(AircraftPage)
  ],
  entryComponents: [
    AircraftPage
  ]
})
export class AircraftPageModule {}