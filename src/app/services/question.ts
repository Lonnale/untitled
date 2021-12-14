export class Question {
  ask: string;
  answer: string;
  question: any;


  constructor(value: string) {
    this.ask = value;
    this.answer = "0 kpl";
  }

  setAnswer(value: number) {
    if (value == 1)
      this.answer = "1 kpl 16€";
    else if (value == 2)
      this.answer = "2 kpl 32€";
    else if (value == 3)
      this.answer = " 3 kpl 48€";
    else if (value == 4)
      this.answer = "4 kpl 56€";

  }

  setAnswer2(value: number) {
    if (value == 1)
      this.answer = "16€";
    else if (value == 2)
      this.answer = "32€";
    else if (value == 3)
      this.answer = "48€";
    else if (value == 4)
      this.answer = "56€";
  }


}
