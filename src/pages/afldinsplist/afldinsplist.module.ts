import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import { AfldinsplistPage } from './afldinsplist';

@NgModule({
  declarations: [
    AfldinsplistPage
  ],
  imports: [
    IonicPageModule.forChild(AfldinsplistPage)
  ],
  entryComponents: [
    AfldinsplistPage
  ]
})
export class AfldinsplistPageModule {}