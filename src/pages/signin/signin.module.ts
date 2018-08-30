import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import { SignInPage } from './signin';

@NgModule({
  declarations: [
    SignInPage
  ],
  imports: [
    IonicPageModule.forChild(SignInPage)
  ],
  entryComponents: [
    SignInPage
  ]
})
export class SignInPageModule {}