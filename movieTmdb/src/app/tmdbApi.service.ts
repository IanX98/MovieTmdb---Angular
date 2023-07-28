import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  constructor(private http: HttpClient) { }
    
  API_URL = 'https://api.themoviedb.org/3';
  API_IMG = 'https://image.tmdb.org/t/p/w500/';
  API_MOVIE = 'https://api.themoviedb.org/3/movie/';
  API_KEY = 'a11a3a1b7510b6fa1508f15d307460b6';
  API_SEARCH = 'https://api.themoviedb.org/3/search/movie/';

    movie!: any;
    query!: string;
    allMovies: any[] = [];

    topRatedURL = `${this.API_MOVIE}top_rated?api_key=${this.API_KEY}`;

    getAllMovies(page: number): Observable<any> {
      const url = `${this.API_URL}/movie/popular`;
      const params = {
        api_key: this.API_KEY,
        page: page.toString()
      };

      return this.http.get<any>(url, { params });
      // return this.http.get<string>(`${this.API_URL}/discover/movie`);
      // return new Promise<any[]>((resolve, reject) => {
      //   let page = 1;
  
      //   const fetchMovies = () => {
      //     const params = new HttpParams()
      //       .set('api_key', this.API_KEY)
      //       .set('language', 'en-US')
      //       .set('sort_by', 'popularity.desc')
      //       .set('include_adult', 'false')
      //       .set('include_video', 'false')
      //       .set('page', page.toString());
            
  
      //     return this.http.get<any>(`${this.API_URL}/discover/movie`, { params })
      //       .toPromise()
      //       .then(response => {
      //           this.allMovies.push(...response.results);
      //           page++;
      //           fetchMovies();
              
      //         if (response?.results && response.results.length > 0) {
      //           this.allMovies.push(...response.results);
      //           page++;
      //           fetchMovies();
      //         } else {
      //           resolve(this.allMovies);
      //         }
      //       })
      //       .catch(error => reject(error));
      //   };
  
      //   fetchMovies();
      // });
    }

    getTopRatedMovies(): Observable<any> {
      return this.http.get<string>(this.topRatedURL);
    }

    searchMovies = (query: string) => {
      const url = `${this.API_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`;
      return this.http.get(url);
    }

    setSelectedMovie = (movie: any) => {
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
}