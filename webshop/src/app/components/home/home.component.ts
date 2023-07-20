import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

export class Home implements OnInit {

  constructor(private apiService: ApiService) {}

  topMovies: any;

  verifyMoviesLength() {
    if (this.topMovies != null) {
      return true
    } 

    return false
  }

  ngOnInit() {
    this.apiService.getTopRatedMovies().subscribe(
      (response) => {
        this.topMovies = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}