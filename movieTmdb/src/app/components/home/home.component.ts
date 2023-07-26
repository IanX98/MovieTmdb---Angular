import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TmdbApiService } from "src/app/tmdbApi.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

export class Home implements OnInit {

  constructor(private route: ActivatedRoute,private apiService: TmdbApiService) {}

  showMovies: any;
  allMovies: any;
  pageSize = 10;
  currentPage = 1;

  verifyMoviesLength() {
    if (this.allMovies != null) {
      return true
    } 

    return false
  }

  pageChanged(event: any): void {
    this.currentPage = event;
    this.updatePagedItems();
  }

  updatePagedItems(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.showMovies = this.allMovies.slice(startIndex, endIndex);
  }

  ngOnInit() {
    this.apiService.getAllMovies()
    this.allMovies = this.apiService.allMovies
  };
}