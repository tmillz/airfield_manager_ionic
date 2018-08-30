import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  email:any;
  password:any;
  public type = 'password';
  public showPass = false;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
     this.email;
     this.password;
  }

  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(data => {
       console.log('got data ', data);
    })
    .catch(error => {
      console.log('got an error ', error);
      this.email = "";
      this.password = "";
    });
    console.log('Would register user with ', this.email, this.password);
  }

  todo = {}

  logForm() {
    console.log(this.todo)
  }

}
