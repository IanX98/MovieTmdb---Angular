import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

export class Home implements OnInit {

  constructor(private route: ActivatedRoute) {}

  topMovies: any;

  verifyMoviesLength() {
    if (this.topMovies != null) {
      return true
    } 

    return false
  }

  ngOnInit() {
    this.route.data.subscribe((resolvedData) => {
      this.topMovies = resolvedData["topRatedData"]; 
    });
  };
}