import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, IonicPageModule } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { NgModule } from '@angular/core/src/metadata/ng_module';

//@IonicPage()

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SignInPage {

  email:any;
  password:any;
  registerPage = RegisterPage;
  public type = 'password';
  public showPass = false;

  constructor(private firebase: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public googleplus: GooglePlus) {
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
    this.firebase.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(data => {
       console.log('got data ', data + 'success!');
       alert("Sign In Successful")
       this.email = "";
       this.password = "";
    })
    .catch(error => {
      console.log('got an error ', error);
      alert("Sign In Error :(")
      this.email = "";
      this.password = "";
    });
    console.log('Would register user with ', this.email, this.password);
  }

  loginGUser() {
    console.log('button clicked ');
    this.googleplus.login({
      'webClientId':"694415063502-9alkuakqa13mcfumfj5elkre5b3bso00.apps.googleusercontent.com",
      'offline':true
    }).then(res=>{
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then(suc=>{
          alert("Login Success")
        }).catch(ns=>{
          alert("Not Successful")
        })
    })
  }
}
