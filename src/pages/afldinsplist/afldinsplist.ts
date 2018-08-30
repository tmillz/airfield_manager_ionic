import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Angular2CsvModule} from 'angular2-csv';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

@Component({
  selector: 'page-afldinsplist',
  templateUrl: 'afldinsplist.html',
})
export class AfldinsplistPage {
  inspectionsList: AngularFireList<any>;
  inspections: Observable<any[]>;
  inspectionsArray = [];

  constructor(private firebase: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, afDatabase: AngularFireDatabase) {
    this.inspectionsList = afDatabase.list('/inspections/'+ this.firebase.auth.currentUser.uid);
    this.inspections = this.inspectionsList.snapshotChanges();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AfldinsplistPage');
  }

  downloadCsv(){
    var itemsProcessed = 0;

    this.inspections.subscribe( inspections => {
      inspections.forEach(inspction => {
        this.inspectionsArray.push(inspction.payload.val());
        itemsProcessed++;
        if(itemsProcessed == inspections.length) {
          this.makeCSV();
        }
      });
    });
    itemsProcessed = 0;
  }

  makeCSV(){
    //new Angular2CsvModule(this.inspectionsArray, 'Inspections Report', { headers: Object.keys(this.inspectionsArray[0])});
  }

  delete(inspectionId: string, event: Event) {
    event.stopPropagation();
    this.inspectionsList.remove(inspectionId);
  }

}
