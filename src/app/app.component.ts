import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { AircraftPage } from '../pages/aircraft/aircraft';
import { SurfaceCalcPage } from '../pages/surfacecalc/surfacecalc';
import { BowCalcPage } from '../pages/bowcalc/bowcalc';
import { LinksPage } from '../pages/links/links';
import { FormsPage } from '../pages/forms/forms';
//import { SignInPage } from '../pages/signin/signin';
import { TabsPage } from '../pages/tabs/tabs';
import { RegulationsPage } from '../pages/regulations/regulations';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any;
  public signedin = false;

  constructor(private firebase: AngularFireAuth, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    const authObserver = firebase.authState.subscribe( user => {
      if (user) {
        this.rootPage = 'HomePage';
        //authObserver.unsubscribe();
        this.signedin = true;
      } else {
        this.rootPage = 'SignInPage';
        //authObserver.unsubscribe();
        this.signedin = false;
      }
    });
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
    if(!this.signedin){
      this.openSignInPage();
    } else {
      this.firebase.auth.signOut();
    }
  }

  openHomePage() {
    this.nav.setRoot('HomePage');
  }

  openAircraftPage() {
    this.nav.setRoot('AircraftPage');
  }

  openSurfCalcPage() {
    this.nav.setRoot('SurfaceCalcPage');
  }

  openBowCalcPage() {
    this.nav.setRoot('BowCalcPage');
  }

  openLinksPage() {
    this.nav.setRoot('LinksPage');
  }

  openFormsPage() {
    this.nav.setRoot('FormsPage');
  }

  openMapPage() {
    var objVC = this.nav.getActive();
    if(objVC.component.name === 'TabsPage') {
        console.log('on maps page already');
    } else {
      if(this.signedin){
        this.nav.setRoot('TabsPage');
      } else {
        this.nav.setRoot('SignInPage');
      }
    }
  }

  openSignInPage() {
    this.nav.setRoot('SignInPage');
    //this.nav.push(SignInPage);
  }

  openRegulationsPage() {
    this.nav.setRoot('RegulationsPage');
  }
}
