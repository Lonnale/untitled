import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],

})
export class ReactiveformComponent implements OnInit {
  profileForm: FormGroup | any;
  submitted = false;

  constructor() {

  }

  ngOnInit()
    :
    void {
    this.profileForm = new FormGroup(
      {
        firstName: new FormControl(
          'Anna', [Validators.required, Validators.minLength(2), Validators.pattern('[A-Za-z]{1,32}')]),

        lastName: new FormControl(
          'Aurinkoinen', [Validators.required, Validators.minLength(2), Validators.pattern('[A-Za-z]{1,32}')]),

        personID: new FormControl(
          'Käyttäjä ID', [Validators.required, Validators.minLength(6), Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]')]),

        email: new FormControl(
          'A.Aurinkoinen@gmail.com', [Validators.required, Validators.minLength(2), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}')]),

        Username: new FormControl(
          'Anna96', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])')]),

        Password: new FormControl(
          'annankatu123', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}')]),

        Password2: new FormControl(
          'annankatu123', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}')]),


      })
    ;


  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get personID() {
    return this.profileForm.get('personID');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get Username() {
    return this.profileForm.get('Username');
  }

  get Password() {
    return this.profileForm.get('Password')
  }

  get Password2() {
    return this.profileForm.get('Password2')
  }

  onReset() {
    this.submitted = false;
    this.profileForm.reset;
  }

  onSubmit() {
    console.warn('profileForm.value: ' + this.profileForm.value.firstName);
    console.warn('profileForm.valid: ' + this.profileForm.valid);
    this.profileForm.reset();
  }
}

