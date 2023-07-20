import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ApiService } from "src/app/api.service";

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

    constructor(private apiService: ApiService) {}
  
    ngOnInit() {
      this.moviePath = `/movie/${this.movie.id}`;
      this.imageSrc = `${this.apiService.API_IMG}${this.movie.poster_path}`;
  }

    selectMovie(movie: any) {
      this.apiService.setSelectedMovie(movie)
    }
}