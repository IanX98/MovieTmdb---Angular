import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/api.service";

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styles: []
  })

export class Movie implements OnInit {

  movie!: any;
  showLink = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.movie = this.apiService.getSelectedMovie()
    console.log(this.movie)
  }
}
