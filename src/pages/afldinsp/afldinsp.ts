import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { AngularFireAuth } from 'angularfire2/auth';
import { storage } from 'firebase';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import firebase from 'firebase';

@IonicPage()

@Component({
  selector: 'page-afldinsp',
  templateUrl: 'afldinsp.html'
})
export class AfldInspPage {
  inspectionForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase: AngularFireAuth, private sanitizer: DomSanitizer) {
    
    const authObserver = firebase.authState.subscribe(user => {
      if (user){
        storage().ref('/users/'+ this.firebase.auth.currentUser.uid + '/test.html').getDownloadURL()
        .then(url => {this.inspectionForm = this.sanitizer.bypassSecurityTrustResourceUrl(url)});
      } else {
        this.inspectionForm = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/test.html');
      }
    });
  
  }

  openInspList(){
    this.navCtrl.push('AfldinsplistPage');
  }

}
