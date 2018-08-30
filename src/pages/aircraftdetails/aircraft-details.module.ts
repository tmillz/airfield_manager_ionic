import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { AircraftDetailsPage } from './aircraft-details';

@NgModule({
  declarations: [
    AircraftDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(AircraftDetailsPage)
  ],
  entryComponents: [
    AircraftDetailsPage
  ]
})
export class AircraftDetailsPageModule {}