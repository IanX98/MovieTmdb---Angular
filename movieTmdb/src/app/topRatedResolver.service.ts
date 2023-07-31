import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TmdbApiService } from './tmdbApi.service';
import TMDBMovie from './models/TmdbMovie';

@Injectable()
export class TopRatedResolver implements Resolve<any> {
  constructor(private apiService: TmdbApiService) {}

  resolve(): Observable<TMDBMovie | any> {
    return this.apiService.getTopRatedMovies();
  };
}
