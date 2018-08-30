import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegSubPage } from './reg-sub';

@NgModule({
  declarations: [
    RegSubPage,
  ],
  imports: [
    IonicPageModule.forChild(RegSubPage),
  ],
  entryComponents: [
    RegSubPage
  ]
})
export class RegSubPageModule {}
