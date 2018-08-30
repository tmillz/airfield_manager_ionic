import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor(public firebase: AngularFireAuth) {}

  loginUser(newEmail: string, newPassword: string): Promise<any> {
    return this.firebase.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }

  resetPassword(email: string): Promise<void> {
    return this.firebase.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return this.firebase.auth.signOut();
  }

  signupUser(newEmail: string, newPassword: string): Promise<any> {
    return this.firebase.auth.createUserWithEmailAndPassword(newEmail, newPassword);
  }

}
