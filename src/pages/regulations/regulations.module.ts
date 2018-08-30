import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { RegulationsPage } from './regulations';

@NgModule({
  declarations: [
    RegulationsPage
  ],
  imports: [
    IonicPageModule.forChild(RegulationsPage)
  ],
  entryComponents: [
    RegulationsPage
  ]
})
export class RegulationsPageModule {}