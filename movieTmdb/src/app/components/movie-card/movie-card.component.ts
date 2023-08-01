import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import TMDBMovie from "src/app/models/TmdbMovie";
import { TmdbApiService } from "src/app/tmdbApi.service";

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styles: []
  })

export class MovieCard implements OnInit {

    @Input() movie!: TMDBMovie;
    @Input() showLink!: boolean;

    imageSrc!: string;
    moviePath!: string;

    constructor(private apiService: TmdbApiService) {}
  
    ngOnInit(): void {
      this.moviePath = `/movie/${this.movie.id}`;
      this.imageSrc = `${this.apiService.API_IMG}${this.movie.poster_path}`;
  }

    selectMovie(movie: TMDBMovie): void {
      this.apiService.setSelectedMovie(movie)
    }
}