import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  myText: any;

  constructor() {
    this.myText = "abc";
  }

  ngOnInit(): void {
  }

  onSave() {
    alert('KUKKUUU!!');
    console.log('KUKKUUU!!');
    this.myText = this.myText.toUpperCase();

  }

  checkValue() {
    alert('toimii');
    this.myText = this.myText.concat('opiskelija');
  }
}
