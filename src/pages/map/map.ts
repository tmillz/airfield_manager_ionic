import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Label } from 'ionic-angular/components/label/label';

declare var google;

//@IonicPage()

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  locationsList: AngularFireList<any>;
  locations: Observable<any[]>;
  public showRule = false;
  markersList = [];

  constructor(private firebase: AngularFireAuth, public navCtrl: NavController, public geolocation: Geolocation, public alertCtrl: AlertController, afDatabase: AngularFireDatabase) {
    this.locationsList = afDatabase.list('/locations/' + this.firebase.auth.currentUser.uid);
    this.locations = this.locationsList.snapshotChanges();
    this.locations = afDatabase.list('/locations/' + this.firebase.auth.currentUser.uid).valueChanges();
  }

  ionViewDidLoad(){
    this.loadMap();
    this.locations.subscribe(snapshots=>{

    for (var i = 0; i < this.markersList.length; i++) {
      this.markersList[i].setMap(null);
    }
    
    snapshots.forEach(snapshot => {
        
        //console.log(snapshot.title);
        var lat = snapshot.lat;
        var lng = snapshot.lng;
        var title = snapshot.title;
        var myLatLng = {lat: lat, lng: lng};

       let marker = new google.maps.Marker({
         map: this.map,
         position: myLatLng,
         title: title
       });
       this.addInfoWindow(marker, title);
       this.markersList.push(marker);
       //console.log(markersList);
      })
    })
  }

  deleteMarkers(){
    for (var i = 0; i < this.markersList.length; i++) {
      this.markersList[i].setMap(null);
    }
  }

  showRuler() {
    this.showRule = !this.showRule;
    if(this.showRule){
      this.measure();
    } else {

    }
  }

  private callback(locations) {
    if(locations.exists()){
      console.log(locations.value());
    }
  }

  loadMap(){
    
       this.geolocation.getCurrentPosition().then((position) => {
    
         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
         let mapOptions = {
           center: latLng,
           zoom: 15,
           mapTypeId: google.maps.MapTypeId.SATELLITE
         }
    
         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

         /*this.locations.forEach(item => {
           item.forEach(location => {
             var lat = location.lat;
             var lng = location.lng;
             var title = location.title;
             var myLatLng = {lat: lat, lng: lng};

            let marker = new google.maps.Marker({
              map: this.map,
              position: myLatLng,
              title: title
            });
           
            this.addInfoWindow(marker, title);

           })
         })*/

       }, (err) => {
         console.log(err);
       });
    
  }

  measure() {
 
    let ruler1 = new google.maps.Marker({
        position: this.map.getCenter() ,
        id: 1,
        map: this.map,
        draggable: true,
        label: 'test'
    });
 
    let ruler2 = new google.maps.Marker({
        position: this.map.getCenter() ,
        id: 2,
        map: this.map,
        draggable: true
    });
 
    let rulerpoly = new google.maps.Polyline({
        path: [ruler1.position, ruler2.position] ,
        strokeColor: "#00a1ff",
        strokeOpacity: .7,
        strokeWeight: 8
    });
    rulerpoly.setMap(this.map);
 
    ruler1.set('label',"0ft");
    //ruler2.set('label',"0m");
 
    google.maps.event.addListener(ruler1, 'drag', function() {
        rulerpoly.setPath([ruler1.getPosition(), ruler2.getPosition()]);
        ruler1.set('label', google.maps.geometry.spherical.computeDistanceBetween(ruler1.getPosition(), ruler2.getPosition(), 20925646.325).toFixed(2)+'ft');
    });
 
    google.maps.event.addListener(ruler2, 'drag', function() {
        rulerpoly.setPath([ruler1.getPosition(), ruler2.getPosition()]);
        ruler1.set('label', google.maps.geometry.spherical.computeDistanceBetween(ruler1.getPosition(), ruler2.getPosition(), 20925646.325).toFixed(2)+'ft');
    });
 
  }

  /*distance(lat1,lon1,lat2,lon2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2-lat1) * Math.PI / 180;
    var dLon = (lon2-lon1) * Math.PI / 180; 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    if (d>1) return Math.round(d)+"km";
    else if (d<=1) return Math.round(d*1000)+"m";
    return d;
  }*/

  addMarker(){
    //var today = new Date();
    var NewMapCenter = this.map.getCenter();
    var lat = NewMapCenter.lat();
    var lng = NewMapCenter.lng();
     let prompt = this.alertCtrl.create({
      title: 'New Marker',
      //message: "Enter info for this marker. (You can edit these details later by checking the Markers list)",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'lat',
          placeholder: 'lat',
          value: lat
        },
        {
          name: 'lng',
          placeholder: 'Lng',
          value: lng
        },
        {
          name: 'date',
          placeholder: 'Date',
          value: new Date().toDateString(),
        },
        {
          name: 'idBy',
          placeholder: "ID'd By"
        },
        {
          name: 'notes',
          placeholder: 'Notes'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            const newLocationRef = this.locationsList.push({});
            //var uid = this.firebase.auth.currentUser.uid;
            newLocationRef.set({
              title: data.title,
              lat: data.lat,
              lng: data.lng,
              date: data.date,
              notes: data.notes,
              id_by: data.idBy
              //uid: uid
            });
          }
        }
      ]
    });
    prompt.present();

   }

   addInfoWindow(marker, content){
    
     let infoWindow = new google.maps.InfoWindow({
       content: content
     });
    
     google.maps.event.addListener(marker, 'click', () => {
       infoWindow.open(this.map, marker);
     });
    
   }

}
