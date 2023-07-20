import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
    
    API_KEY='api_key=a11a3a1b7510b6fa1508f15d307460b6'
    API='https://api.themoviedb.org/3/movie/'
    API_SEARCH='https://api.themoviedb.org/3/search/movie/'
    API_IMG='https://image.tmdb.org/t/p/w500/'

    topRatedURL = `${this.API}top_rated?${this.API_KEY}`;
    movie!: any;
    
    getTopRatedMovies = () => {
      return this.http.get(this.topRatedURL);
    }

    setSelectedMovie = (movie: any) => {
      this.movie = movie
    }

    getSelectedMovie = () => {
      return this.movie;
    }
}