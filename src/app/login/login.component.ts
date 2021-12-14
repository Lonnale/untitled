import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup | any;


  constructor(public router: Router) {

  }


  ngOnInit(): void {
    this.profileForm = new FormGroup(
      {
        email: new FormControl(
          'A.Aurinkoinen@gmail.com', [Validators.required, Validators.minLength(2), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}')]),

        Password: new FormControl(
          'annankatu123', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}')]),
      })
  }

  get email() {
    return this.profileForm.get('email');
  }

  get Password() {
    return this.profileForm.get('Password')


  }

  onSubmit() {

  }

  cancel() {
    this.router.navigate(['calculator']);
  }

  login() {
    this.router.navigate(['maintenance']);
  }
}
