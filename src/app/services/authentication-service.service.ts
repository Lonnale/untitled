import {Injectable} from '@angular/core';
//import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {
  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');
}

/*  constructor(public afAuth: AngularFireAuth, public router: Router) {

  }

/*
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        //this.next(email, password);
        this.router.navigate(['maintenance']);
      })
      .catch((error) => {
      });


  }

  logout() {

  }

  getLoggedInUser(): any {
  }

  checkLoggedInUser() {

  }


}





