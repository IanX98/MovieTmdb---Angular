import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
    
  API_URL = 'https://api.themoviedb.org/3';
  API_IMG = 'https://image.tmdb.org/t/p/w500/';
  API_MOVIE = 'https://api.themoviedb.org/3/movie/';
  API_KEY = 'api_key=a11a3a1b7510b6fa1508f15d307460b6';
  API_SEARCH = 'https://api.themoviedb.org/3/search/movie/';

    movie!: any;
    query!: string;

    topRatedURL = `${this.API_MOVIE}top_rated?${this.API_KEY}`;
    
    getTopRatedMovies = () => {
      return this.http.get(this.topRatedURL);
    }

    searchMovies = (query: string) => {
      const url = `${this.API_URL}/search/movie?${this.API_KEY}&query=${query}`;
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