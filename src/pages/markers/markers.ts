import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Modal, ModalController, ModalOptions } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { MarkerModalPage } from '../marker-modal/marker-modal';
import { Angular2CsvModule } from 'angular2-csv';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

@Component({
  selector: 'page-markers',
  templateUrl: 'markers.html'
})

export class MarkersPage {
  locationsList: AngularFireList<any>;
  locations: Observable<any[]>;
  locationsArray = [];

  constructor(private firebase: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, afDatabase: AngularFireDatabase, private modal: ModalController) {
    this.locationsList = afDatabase.list('/locations/'+ this.firebase.auth.currentUser.uid);
    this.locations = this.locationsList.snapshotChanges();
  }

  delete(locationId: string, event: Event) {
    event.stopPropagation();
    this.locationsList.remove(locationId);
  }

  locationTapped(locationId: string, location, event: Event) {
    event.stopPropagation();
    const myModal: Modal = this.modal.create(MarkerModalPage, {title:location.payload.val().title, lat:location.payload.val().lat, 
      lng:location.payload.val().lng, date:location.payload.val().date, id_by:location.payload.val().id_by, notes:location.payload.val().notes,
       img:location.payload.val().img, type:location.payload.val().type, dateClosed:location.payload.val().dateClosed});

    myModal.present();

    myModal.onDidDismiss((location) => {
      if(location === undefined){
        console.log('modal cancled');
        } else {
          const newLocationRef = this.locationsList.update(locationId, {
            title: location.title,
            lat: location.lat,
            lng: location.lng,
            date: location.date,
            notes: location.notes,
            id_by: location.id_by,
            img: location.img,
            type: location.type,
            dateClosed: location.dateClosed
          });
        }  
    });

    myModal.onWillDismiss((location) => {

    });
  }

  downloadCsv(){
    var itemsProcessed = 0;

    this.locations.subscribe( locations => {
      locations.forEach(location => {
        this.locationsArray.push(location.payload.val());
        itemsProcessed++;
        if(itemsProcessed == locations.length) {
          this.makeCSV();
        }
      });
    });
    itemsProcessed = 0;
  }

  makeCSV(){
    //new Angular2CsvModule(this.locationsArray, 'Markers Report', { headers: Object.keys(this.locationsArray[0])});
  }

}


