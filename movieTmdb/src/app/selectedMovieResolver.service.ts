import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TmdbApiService } from './tmdbApi.service';

@Injectable()
export class SelectedMovieResolver implements Resolve<any> {
  constructor(private apiService: TmdbApiService) {}

  resolve(): Observable<any> {
    return this.apiService.getSelectedMovie();
  };
}
