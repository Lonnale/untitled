import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  person: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form1: NgForm) {
    console.log(form1.value.firstName);
    console.log(form1.controls['firstName'].status);
  }
}
