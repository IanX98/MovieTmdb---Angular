import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import TMDBMovie from "src/app/models/TmdbMovie";
import { TmdbApiService } from "src/app/tmdbApi.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

export class Home implements OnInit {

  constructor(protected apiService: TmdbApiService, private route: ActivatedRoute) {}

  movies: TMDBMovie[] = [];

  ngOnInit(): void {
    this.movies = this.route.snapshot.data["allMoviesResolver"].results
  }

  fetchMovies(page: number): void {
    this.apiService.getAllMovies(page).subscribe(response => {
      this.movies = response.results;
    });
  }

  onNext(): void {    
    this.apiService.nextPage()
    this.fetchMovies(this.apiService.currentPage$.value);
  }

  onPrevious(): void {
    if (this.apiService.currentPage$.value > 1) {
      this.apiService.previousPage()      
      this.fetchMovies(this.apiService.currentPage$.value);
    }
  }
}