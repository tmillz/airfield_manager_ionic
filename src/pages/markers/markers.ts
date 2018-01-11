import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'page-markers',
  templateUrl: 'markers.html'
})

export class MarkersPage {
  locationsList: AngularFireList<any>;
  locations: Observable<any[]>;

  constructor(private firebase: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, afDatabase: AngularFireDatabase) {
    this.locationsList = afDatabase.list('/locations/'+ this.firebase.auth.currentUser.uid);
    this.locations = this.locationsList.snapshotChanges();
  }

  delete(locationId: string) {
    this.locationsList.remove(locationId);
  }
}
