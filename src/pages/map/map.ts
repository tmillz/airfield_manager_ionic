import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, Modal, ModalController, ModalOptions } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, AngularFireList, stateChanges } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { MarkerModalPage } from '../marker-modal/marker-modal';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { List } from 'ionic-angular/components/list/list';
import { storage } from 'firebase';
import { Img } from 'ionic-angular/components/img/img-interface';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

declare var google;

@IonicPage()

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  location: any;
  locationsList: AngularFireList<any>;
  locations: Observable<any[]>;
  public showRule = false;
  markersList = [];
  rulerList = [];
  content: any;

  constructor(private firebase: AngularFireAuth, public navCtrl: NavController, public geolocation: Geolocation, public alertCtrl: AlertController, afDatabase: AngularFireDatabase, private modal: ModalController) {
    this.locationsList = afDatabase.list('/locations/' + this.firebase.auth.currentUser.uid);
    this.locations = this.locationsList.snapshotChanges();
  }

  ionViewDidLoad(){
    this.loadMap();
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
      this.hideRule();
    }
  }

  hideRule(){
    for (var i = 0; i < this.rulerList.length; i++) {
      this.rulerList[i].setMap(null);
    }
  }

  loadMap(){
    
       this.geolocation.getCurrentPosition().then((position) => {
    
         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
         let mapOptions = {
           center: latLng,
           zoom: 15,
           mapTypeId: google.maps.MapTypeId.SATELLITE,
           fullscreenControl: false
         }
    
         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

         google.maps.event.addListenerOnce(this.map, 'idle', (test)=>{
          this.locations.subscribe(locations=>{
        
            for (var i = 0; i < this.markersList.length; i++) {
              this.markersList[i].setMap(null);
            };
            
            locations.forEach(location => {
                
                var lat = location.payload.val().lat;
                var lng = location.payload.val().lng;
                var title = location.payload.val().title;
                var id_by = location.payload.val().id_by;
                var myLatLng = {lat: lat, lng: lng};
                var img = location.payload.val().img;
                var type = location.payload.val().type;
                var dateClosed = location.payload.val().dateClosed;
        
               let marker = new google.maps.Marker({
                 map: this.map,
                 icon: 'assets/'+type,
                 position: myLatLng,
                 title: title
               })
               this.markersList.push(marker);
               if(img != ''){
               storage().ref('/users/'+this.firebase.auth.currentUser.uid + '/' + img).getDownloadURL().then(url => this.content = '<img align="Left" style="margin-right:10px" height="42" src=' + url + '>Title: '+ title +'<br>ID by: '+ id_by).then(content =>{this.addInfoWindow(marker, content);});
               } else {
                 this.addInfoWindow(marker, title);
               };
              })
            },onerror=>{console.log("error")});
         })
         
       }, (err) => {
         console.log(err);
       });
  }

  measure() {
 
    let ruler1 = new google.maps.Marker({
        position: this.map.getCenter(),
        id: 1,
        map: this.map,
        draggable: true
    });

    this.rulerList.push(ruler1);
 
    let ruler2 = new google.maps.Marker({
        position: this.map.getCenter(),
        id: 2,
        map: this.map,
        draggable: true
    });

    this.rulerList.push(ruler2);
 
    let rulerpoly = new google.maps.Polyline({
        path: [ruler1.position, ruler2.position] ,
        strokeColor: "#00a1ff",
        strokeOpacity: .7,
        strokeWeight: 8
    });
    rulerpoly.setMap(this.map);
    this.rulerList.push(rulerpoly);
    ruler1.set('label',"0ft");
    ruler2.set('label',"0ft");
 
    google.maps.event.addListener(ruler1, 'drag', function() {
        rulerpoly.setPath([ruler1.getPosition(), ruler2.getPosition()]);
        ruler1.set('label', google.maps.geometry.spherical.computeDistanceBetween(ruler1.getPosition(), ruler2.getPosition(), 20925646.325).toFixed(2)+'ft');
        ruler2.set('label', google.maps.geometry.spherical.computeDistanceBetween(ruler1.getPosition(), ruler2.getPosition(), 20925646.325).toFixed(2)+'ft');
    });
 
    google.maps.event.addListener(ruler2, 'drag', function() {
        rulerpoly.setPath([ruler1.getPosition(), ruler2.getPosition()]);
        ruler1.set('label', google.maps.geometry.spherical.computeDistanceBetween(ruler1.getPosition(), ruler2.getPosition(), 20925646.325).toFixed(2)+'ft');
        ruler2.set('label', google.maps.geometry.spherical.computeDistanceBetween(ruler1.getPosition(), ruler2.getPosition(), 20925646.325).toFixed(2)+'ft');
    });
 
  }

  addMarker(){
    var NewMapCenter = this.map.getCenter();
    var lat = NewMapCenter.lat();
    var lng = NewMapCenter.lng();

    const myModal: Modal = this.modal.create(MarkerModalPage, {title:'', lat:lat, lng:lng, date:'', id_by:'', notes:'', img:'', type:'', dateClosed:''});

    myModal.present();

    myModal.onDidDismiss((location) => {
      
      if(location === undefined){
        console.log('modal cancled');
      } else {
        const newLocationRef = this.locationsList.push({});
            newLocationRef.set({
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
