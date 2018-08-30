import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import { BowCalcPage } from './bowcalc';

@NgModule({
  declarations: [
    BowCalcPage
  ],
  imports: [
    IonicPageModule.forChild(BowCalcPage)
  ],
  entryComponents: [
    BowCalcPage
  ]
})
export class BowCalcPageModule {}