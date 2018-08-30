import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import { SurfaceCalcPage } from './surfacecalc';

@NgModule({
  declarations: [
    SurfaceCalcPage
  ],
  imports: [
    IonicPageModule.forChild(SurfaceCalcPage)
  ],
  entryComponents: [
    SurfaceCalcPage
  ]
})
export class SurfaceCalcPageModule {}