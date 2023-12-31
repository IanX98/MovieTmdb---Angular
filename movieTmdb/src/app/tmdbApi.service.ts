import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter  } from 'rxjs';
import TMDBMovie from './models/TmdbMovie';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  constructor(private http: HttpClient) {
    this.currentPage$.pipe(filter(page => page > 0)).subscribe(page => {
      this.fetchMovies(page, this.query);
    });

    this.searchText$.pipe(filter(query => query != null)).subscribe(text => {
      this.currentPage$.next(1)
      if (this.validateSearchText(text)) {
        this.query = text;
        this.fetchMovies(this.currentPage$.value, text);
      } 
    });
   }
    
   API_URL = 'https://api.themoviedb.org/3';
   API_KEY = 'a11a3a1b7510b6fa1508f15d307460b6';
   API_IMG = 'https://image.tmdb.org/t/p/w500/';
  API_MOVIE = 'https://api.themoviedb.org/3/movie/';
  API_SEARCH = 'https://api.themoviedb.org/3/search/movie/';

  query!: string;
  movie!: TMDBMovie | any;

  searchText$: BehaviorSubject<string> = new BehaviorSubject('');
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);
  homeMovies$: BehaviorSubject<TMDBMovie[]> = new BehaviorSubject<TMDBMovie[]>([]);

    getAllMovies(page: number, query = ''): Observable<TMDBMovie | any> {

      if (query != '') {
        const url = `${this.API_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`;
        const params = { 
          api_key: this.API_KEY,
          page: page.toString(),
        };
        return this.http.get<string>(url, { params });
      }

      const url = `${this.API_URL}/movie/popular`;
      const params = { 
        api_key: this.API_KEY,
        page: page.toString(),
      };

      return this.http.get<string>(url, { params });
    }

    getTopRatedMovies(): Observable<TMDBMovie | any> {
      const topRatedURL = `${this.API_MOVIE}top_rated?api_key=${this.API_KEY}`;
      return this.http.get<string>(topRatedURL);
    }

    fetchMovies(page: number, query = ''): TMDBMovie[] {
      let movieObj!: TMDBMovie[];
      this.getAllMovies(page, query).subscribe(response => {
        this.homeMovies$.next(response.results);
        movieObj = this.homeMovies$.value;
      });

      return movieObj;
    }

    setSelectedMovie = (movie: TMDBMovie): void => {
      this.movie = movie
    }

    getSelectedMovie = (): TMDBMovie | any => {
      const url = `https://api.themoviedb.org/3/movie/${this.movie.id}?api_key=${this.API_KEY}&language=pt-BR`;
      return this.http.get<string>(url);
    }

    nextPage(): void {
      this.currentPage$.next(this.currentPage$.getValue() + 1)
    }

    previousPage(): void {
      this.currentPage$.next(this.currentPage$.getValue() - 1);
    }

    validateHomeMoviesObj(): boolean {
      if (this.homeMovies$?.value?.length > 0) {
        return true;
      }

      return false
    }

    setSearchText(query: string) {
      this.searchText$.next(query);
    }

    validateSearchText(text: string): boolean {
      text = text.trim()
      if (text != '') {
        return true;
      } 

      return false;
    }
}