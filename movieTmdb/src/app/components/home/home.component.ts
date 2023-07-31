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

  constructor(private apiService: TmdbApiService, private route: ActivatedRoute) {}

  movies: TMDBMovie[] = [];
  currentPage = 1;

  ngOnInit(): void {
    this.allMoviesResolver()
  }

  allMoviesResolver() {
    this.route.data.subscribe((resolvedData) => {
      this.movies = resolvedData["allMoviesResolver"].results; 
    });
  }

  fetchMovies(page: number): void {
    this.apiService.getAllMovies(page).subscribe(response => {
      this.movies = response.results;
    });
  }

  onNext(): void {
    this.currentPage++;
    this.apiService.currentPage = this.currentPage
    this.fetchMovies(this.currentPage);
  }

  onPrevious(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchMovies(this.currentPage);
    }
  }
}