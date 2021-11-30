export class Question {
  ask: string;
  answer: string;
  question: any;


  constructor(value: string) {
    this.ask = value;
    this.answer = "ei mitää";
  }

  setAnswer(value: number) {
    if (value == 1)
      this.answer = "ei arvosteltu";
    else if (value == 2)
      this.answer = "huono";
    else if (value == 3)
      this.answer = "ok";
    else if (value == 4)
      this.answer = "hyvä";
  }


}
