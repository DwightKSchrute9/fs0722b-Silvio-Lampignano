import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class MoviesService {

    constructor(private httpClient: HttpClient) {

    }

    public getMovies(): Observable<any> {
        return this.httpClient.get('urlbase/movie/popular'); //url lista movieS
    }
}
