import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import TMDBMovie from "src/app/models/TmdbMovie";

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styles: []
  })

export class Movie implements OnInit {

  movie!: TMDBMovie;
  showLink = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((resolvedData) => {
      this.movie = resolvedData["selectedMovie"]; 
    });
  }
}
