import {Injectable} from '@angular/core';
import {Question} from "./question";


@Injectable({
  providedIn: 'root'
})
export class TenttikysymysService {
  kysymykset: Array<Question> = [
    new Question("Peruslippu:"),
    new Question("Opiskelija:"),
    new Question("Eläkeläinen:")
  ];

  constructor() {
  }

  getKysymykset(): any {
    return this.kysymykset;
  }
}
