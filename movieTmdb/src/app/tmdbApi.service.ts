import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, takeWhile } from 'rxjs';
import TMDBMovie from './models/TmdbMovie';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  constructor(private http: HttpClient) {
    this.currentPage$.pipe(filter(page => page > 0)).subscribe(page => {
      this.fetchMovies(page);
    });

    // this.searchText$.pipe(takeWhile(() => true)).subscribe(text => {
    //   this.searchMovies(text);
    // });
   }
    
   API_URL = 'https://api.themoviedb.org/3';
   API_KEY = 'a11a3a1b7510b6fa1508f15d307460b6';
   API_IMG = 'https://image.tmdb.org/t/p/w500/';
  API_MOVIE = 'https://api.themoviedb.org/3/movie/';
  API_SEARCH = 'https://api.themoviedb.org/3/search/movie/';

  query!: string;
  movie!: TMDBMovie | any;

    currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);
    searchText$: BehaviorSubject<string> = new BehaviorSubject('');
    showMovies$: BehaviorSubject<TMDBMovie[]> = new BehaviorSubject<TMDBMovie[]>([]);
    searchedMovies$: BehaviorSubject<TMDBMovie[]> = new BehaviorSubject<TMDBMovie[]>([]);

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

    searchMovies = (query: string): Observable<Object> => {
      const url = `${this.API_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`;
      return this.http.get(url);
    }

    requestSearchMovies(query: string): Observable<TMDBMovie | any> {
      const url = `${this.API_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`;
      return this.http.get<string>(url);
    }

    getSearchObj(query: string): TMDBMovie[] {
      let searchObj!: TMDBMovie[];
      this.requestSearchMovies(query).subscribe(
        (response) => {
          this.searchedMovies$.next(response.results)
          searchObj = this.searchedMovies$.value
        },
        (error) => {
          console.error(error);
        }
      );

      return searchObj;
    }

    fetchMovies(page: number): TMDBMovie[] {
      let movieObj!: TMDBMovie[];
      this.getAllMovies(page).subscribe(response => {
        this.showMovies$.next(response.results);
        movieObj = this.showMovies$.value;
      });

      return movieObj;
    }

    setSelectedMovie = (movie: TMDBMovie): void => {
      this.movie = movie
    }

    getSelectedMovie = (): TMDBMovie | any => {
      return this.movie;
    }

    setQueryText(query: string): void {
      this.query = query;
    }

    getQueryText(): string {
      return this.query
    }

    nextPage(): void {
      this.currentPage$.next(this.currentPage$.getValue() + 1)
    }

    previousPage(): void {
      this.currentPage$.next(this.currentPage$.getValue() - 1);
    }

    validateSearchMoviesObj(): boolean {
      if (this.searchedMovies$?.value?.length > 0) {
        return true;
      }

      return false
    }
}