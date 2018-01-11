import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AircraftPage } from '../pages/aircraft/aircraft';
import { SurfaceCalcPage } from '../pages/surfacecalc/surfacecalc';
import { BowCalcPage } from '../pages/bowcalc/bowcalc';
import { LinksPage } from '../pages/links/links';
import { FormsPage } from '../pages/forms/forms';
import { MapPage } from '../pages/map/map';
import { AfldInspPage } from '../pages/afldinsp/afldinsp';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AircraftDetailsPage } from '../pages/aircraftdetails/aircraft-details';
import { SignInPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { MarkersPage } from '../pages/markers/markers';
import { RegulationsPage } from '../pages/regulations/regulations';
import { IonicPageModule } from 'ionic-angular/module';

export const firebaseConfig = {
    apiKey: "AIzaSyCkaHTUzgjGFh703B9JOcnwEXempkRSjKk",
    authDomain: "airfield-manager.firebaseapp.com",
    databaseURL: "https://airfield-manager.firebaseio.com",
    projectId: "airfield-manager",
    storageBucket: "airfield-manager.appspot.com",
    messagingSenderId: "694415063502"
  };

firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AircraftPage,
    SurfaceCalcPage,
    BowCalcPage,
    LinksPage,
    FormsPage,
    MapPage,
    AfldInspPage,
    AircraftDetailsPage,
    SignInPage,
    RegisterPage,
    TabsPage,
    MarkersPage,
    RegulationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AircraftPage,
    SurfaceCalcPage,
    BowCalcPage,
    LinksPage,
    FormsPage,
    MapPage,
    AfldInspPage,
    AircraftDetailsPage,
    SignInPage,
    RegisterPage,
    TabsPage,
    MarkersPage,
    RegulationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
