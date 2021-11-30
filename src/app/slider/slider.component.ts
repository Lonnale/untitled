import {Component, OnInit} from '@angular/core';
import {Question} from "../services/question";
import {ServiceDemoService} from "../services/service-demo.service";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  /*  questions: Array<Question> = [
      new Question("kysymys1"),
      new Question("kysymys2"),
      new Question("kysymys3")
    ];*/
  title = 'Anna palautetta'
  questions: Array<Question>;


  constructor(private qData: ServiceDemoService) {
    this.questions = this.qData.getQuestions();
  }

  ngOnInit(): void {
  }

  onInputChange(event: any, q: Question) {
    q.answer = event.value;
    console.log(q.question)
    q.setAnswer(event.value);
  }

}

