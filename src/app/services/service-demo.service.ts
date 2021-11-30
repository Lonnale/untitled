import {Injectable} from '@angular/core';
import {Question} from "./question";

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {
  questions: Array<Question> = [
    new Question("kysymys1"),
    new Question("kysymys2"),
    new Question("kysymys3")
  ];

  constructor() {

  }

  getQuestions(): any {
    return this.questions;
  }
}
