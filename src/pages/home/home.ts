import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Content) content: Content;
  showToolbar:boolean = false;
  headerImgSize:string = '100%';
  headerImgUrl:string = '';
  transition:boolean = false;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public ref: ChangeDetectorRef
    ) {
  }

  //homepage scrolling!!!!
  ionViewDidLoad() {
      //console.log('ionViewDidLoad HomePage');

      this.headerImgUrl = './assets/home.jpeg';

      //this.content.enableScrollListener();
  }

  onScroll($event: any){
        let scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 120;
        if(scrollTop < 0){
            this.transition = false;
            this.headerImgSize = `${ Math.abs(scrollTop)/2 + 100}%`;
        }else{
            this.transition = true;
            this.headerImgSize = '100%'
        }
        this.ref.detectChanges();
  }

}
