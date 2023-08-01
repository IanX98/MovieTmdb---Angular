import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-top-rated-movies',
    templateUrl: './topRatedMovies.component.html',
  })

export class TopRatedMovies implements OnInit {

  constructor(private route: ActivatedRoute) {}

  topMovies: any;

  verifyMoviesLength(): boolean {
    if (this.topMovies != null) {
      return true
    } 

    return false
  }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedData) => {
      this.topMovies = resolvedData["topRatedData"]; 
    });
  };
}