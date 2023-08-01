import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, takeWhile } from 'rxjs';
import TMDBMovie from './models/TmdbMovie';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  constructor(private http: HttpClient) {
    this.currentPage$.pipe(takeWhile(() => true)).subscribe(page => {
      this.currentPage$.next(page);
    });
   }
    
  API_URL = 'https://api.themoviedb.org/3';
  API_IMG = 'https://image.tmdb.org/t/p/w500/';
  API_MOVIE = 'https://api.themoviedb.org/3/movie/';
  API_KEY = 'a11a3a1b7510b6fa1508f15d307460b6';
  API_SEARCH = 'https://api.themoviedb.org/3/search/movie/';

    movie!: TMDBMovie | any;
    query!: string;
    allMovies: TMDBMovie[] = [];

    currentPage$ = new BehaviorSubject(1);

    topRatedURL = `${this.API_MOVIE}top_rated?api_key=${this.API_KEY}`;

    getAllMovies(page: number): Observable<TMDBMovie | any> {
      const url = `${this.API_URL}/movie/popular`;
      const params = { 
        api_key: this.API_KEY,
        page: page.toString(),
      };

      return this.http.get<string>(url, { params });
    }

    getTopRatedMovies(): Observable<TMDBMovie | any> {
      return this.http.get<string>(this.topRatedURL);
    }

    searchMovies = (query: string) => {
      const url = `${this.API_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`;
      return this.http.get(url);
    }

    setSelectedMovie = (movie: TMDBMovie) => {
      this.movie = movie
    }

    getSelectedMovie = () => {
      return this.movie;
    }

    setQueryText(query: string) {
      this.query = query;
    }

    getQueryText() {
      return this.query
    }

    nextPage() {
      this.currentPage$.next(this.currentPage$.getValue() + 1)
    }

    previousPage() {
      this.currentPage$.next(this.currentPage$.getValue() - 1);
    }
}