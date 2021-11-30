import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  private cinemaData$: Observable<[]> | undefined;


  constructor(private moviesService: MoviesService) {
    this.cinemaData$ = this.cinemaService.getData();
  }


  ngOnInit()
    :
    void {
  }

}
