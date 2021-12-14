import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  cinemaData$: Observable<any>;
  title = 'angular-text-search-highlight';
  searchTerm: any;

  constructor(private moviesService: MoviesService
  ) {
    this
      .cinemaData$ = this.moviesService.getData();
  }


  ngOnInit()
    :
    void {
  }

}
