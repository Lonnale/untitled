export class Kysymys {
  ask: string;
  answer: string;
  kysymys: any;


  constructor(value: string) {
    this.ask = value;
    this.answer = "ei mitää";
  }

  setAnswer(value: number) {
    if (value == 1)
      this.answer = "1 kpl";
    else if (value == 2)
      this.answer = "2 kpl";
    else if (value == 3)
      this.answer = "3 kpl";
    else if (value == 4)
      this.answer = "4 kpl";
  }


}
