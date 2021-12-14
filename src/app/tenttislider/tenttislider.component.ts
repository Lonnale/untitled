import {Component, OnInit} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {TenttikysymysService} from "../services/tenttikysymys.service";
import {Kysymys} from "../services/kysymys.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-tenttislider',
  templateUrl: './tenttislider.component.html',
  styleUrls: ['./tenttislider.component.css']
})
export class TenttisliderComponent implements OnInit {
  title = 'lipun hinta'
  kysymykset: Array<Kysymys>
  profileform: FormGroup | any;
  submitted = false;
  profileForm: any;


  constructor(private qData: TenttikysymysService) {
    this.kysymykset = this.qData.getKysymykset();
  }

  ngOnInit(): void {
    this.profileform = new FormGroup(
      {
        firstName: new FormControl(
          'Anna', [Validators.required, Validators.minLength(2), Validators.pattern('[A-Za-z]')]),

        lastName: new FormControl(
          'Aurinkoinen', [Validators.required, Validators.minLength(2), Validators.pattern('[A-Za-z]')]),

        email: new FormControl(
          'A.Aurinkoinen@gmail.com', [Validators.required, Validators.minLength(2), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}')]),
      });
  }

  onInputChange(event: any, k: Kysymys) {
    k.answer = event.value;
    console.log(k.kysymys)
    k.setAnswer(event.value);
  }

  onSubmit() {
    console.warn('profileForm.value: ' + this.profileForm.value.firstName);
    console.warn('profileForm.value: ' + this.profileForm.value.lastName);
    console.warn('profileForm.value: ' + this.profileForm.value.email);
    console.warn('profileForm.valid: ' + this.profileForm.valid);
    this.profileForm.reset();
  }

  get firstName() {
    return this.profileForm.get('firstName')
  }

  get lastName() {
    return this.profileForm.get('lastName')
  }

  get email() {
    return this.profileForm.get('email')
  }

  onChange(checked: boolean) {

  }
}
