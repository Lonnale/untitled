import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {parseString} from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = "https://www.finnkino.fi/xml/News/"

  constructor(private httpClient: HttpClient) {


  }


  getData(): Observable<any> {

    let params = new HttpParams().set("area", "1041").set("categoryID", "1041");
    return this.httpClient.get(this.url, {responseType: 'text'})
      .pipe(map(response => {


        let newsData: any = [];


        parseString(response, {
          trim: true,
          explicitArray: false,
          mergeAttrs: true
        }, function (err, result) {
          console.log('getJsonData.......' + JSON.stringify(result.News.NewsArticle));
          newsData = result.News.NewsArticle;
        });


        return newsData;
      }));

  }

}
