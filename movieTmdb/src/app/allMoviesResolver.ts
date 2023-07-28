import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TmdbApiService } from './tmdbApi.service';

// @Injectable()
// export class AllMoviesResolver implements Resolve<any> {
//   constructor(private apiService: TmdbApiService) {}

//   resolve(): Observable<any> {
//     return this.apiService.getAllMovies();
//   };
// }
