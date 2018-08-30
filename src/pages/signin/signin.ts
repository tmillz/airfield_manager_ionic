import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

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
  loading: Loading;
  loginForm: FormGroup;

  constructor(private firebase: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public googleplus: GooglePlus,
              public authData: AuthProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {
     this.email;
     this.password;

     this.loginForm = formBuilder.group({
      email: [''],
      password: ['']
    });

  }

  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  /*signInUser() {
    this.firebase.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(data => {
       console.log('got data ', data + 'success!');
       alert("Sign In Successful")
       this.email = "";
       this.password = "";
    }).then( firebase =>{
      this.navCtrl.setRoot(HomePage);
    })
    .catch(error => {
      console.log('got an error ', error);
      alert("Sign In Error :(")
      this.email = "";
      this.password = "";
    });
    console.log('Would register user with ', this.email, this.password);

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }*/

  loginUser(){
    //if (!this.loginForm.valid){
    //  console.log(this.loginForm.value);
    //} else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        this.navCtrl.setRoot('HomePage');
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
  
      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    //}
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

  openRegPage(){
    this.navCtrl.push('RegisterPage');
  }
}
