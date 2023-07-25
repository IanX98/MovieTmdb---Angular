import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styles: []
  })

export class Movie implements OnInit {

  movie!: any;
  showLink = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((resolvedData) => {
      this.movie = resolvedData["selectedMovie"]; 
    });
  }
}
