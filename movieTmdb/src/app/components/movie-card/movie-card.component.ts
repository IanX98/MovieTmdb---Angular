import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TmdbApiService } from "src/app/tmdbApi.service";

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styles: []
  })

export class MovieCard implements OnInit {

    @Input() movie!: any;
    @Input() showLink!: any;

    imageSrc!: string;
    moviePath: any;

    constructor(private apiService: TmdbApiService) {}
  
    ngOnInit() {
      this.moviePath = `/movie/${this.movie.id}`;
      this.imageSrc = `${this.apiService.API_IMG}${this.movie.poster_path}`;
  }

    selectMovie(movie: any) {
      this.apiService.setSelectedMovie(movie)
    }
}