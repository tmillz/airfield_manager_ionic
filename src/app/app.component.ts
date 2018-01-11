import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AircraftPage } from '../pages/aircraft/aircraft';
import { SurfaceCalcPage } from '../pages/surfacecalc/surfacecalc';
import { BowCalcPage } from '../pages/bowcalc/bowcalc';
import { LinksPage } from '../pages/links/links';
import { FormsPage } from '../pages/forms/forms';
import { MapPage } from '../pages/map/map';
import { AfldInspPage } from '../pages/afldinsp/afldinsp';
import { AircraftDetailsPage } from '../pages/aircraftdetails/aircraft-details';
import { SignInPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { MarkersPage } from '../pages/markers/markers';
import { RegulationsPage } from '../pages/regulations/regulations';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  public signin = false;

  constructor(private firebase: AngularFireAuth, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.setRoot = page;
  }

  signIn(){
    //this.signin = !this.signin;
    if(this.signin){
      //this.type = 'text';
      this.openSignInPage();
    } else {
      //this.openSignInPage();
      this.firebase.auth.signOut();
      this.signin = false;
      this.openHomePage();
    }
  }

  openHomePage() {
    this.nav.setRoot(HomePage);
  }

  openAircraftPage() {
    this.nav.setRoot(AircraftPage);
  }

  openSurfCalcPage() {
    this.nav.setRoot(SurfaceCalcPage);
  }

  openBowCalcPage() {
    this.nav.setRoot(BowCalcPage);
  }

  openLinksPage() {
    this.nav.setRoot(LinksPage);
  }

  openFormsPage() {
    this.nav.setRoot(FormsPage);
  }

  openMapPage() {
    //this.nav.setRoot(MapPage);
    this.nav.setRoot(TabsPage);
  }

  openSignInPage() {
    this.nav.setRoot(SignInPage);
    //this.nav.push(SignInPage);
  }

  openRegulationsPage() {
    this.nav.setRoot(RegulationsPage);
  }

  //doRefresh(refresher) {
  //  console.log('Begin async operation', refresher);

  //  setTimeout(() => {
  //    console.log('Async operation has ended');
  //    refresher.complete();
  //  }, 2000);
  //}
}
