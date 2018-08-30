import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { storage } from 'firebase';
import { UrlResolver } from '@angular/compiler';

@Component({
  selector: 'page-marker-modal',
  templateUrl: 'marker-modal.html',
})
export class MarkerModalPage {
  location: any;
  file: File;
  img: any;

  constructor(private firebase: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private camera: Camera, afDatabase: AngularFireDatabase) {
    var title = navParams.get('title');
    var lat = navParams.get('lat');
    var lng = navParams.get('lng');
    var date = navParams.get('date');
    var id_by = navParams.get('id_by');
    var notes = navParams.get('notes');
    var img = navParams.get('img');
    var type = navParams.get('type');
    var dateClosed = navParams.get('dateClosed');
    this.location = {title:title, lat:lat, lng:lng, date:date, id_by:id_by, notes:notes, img:img, type:type, dateClosed:dateClosed};
  }
  
  ionViewDidLoad(){
    if(this.location.img != ''){
      storage().ref('/users/'+ this.firebase.auth.currentUser.uid + '/' + this.location.img).getDownloadURL().then(url => this.img =url);
    }
  }

  closeModal() {
    this.viewCtrl.dismiss(this.location);
  }

  cancelModal() {
    this.viewCtrl.dismiss();
  }

  /*selectImg(){
    const options: CameraOptions ={
      quality: 50
    }
    this.camera.getPicture(options); 
  }*/

  changeListener(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      this.file = fileList[0];
      this.location['img'] = this.file.name;
      const image = storage().ref('/users/'+this.firebase.auth.currentUser.uid + '/' + this.file.name);
      image.put(this.file);
  }
}
