import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { TmdbApiService } from "src/app/tmdbApi.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

export class Home implements OnInit {

  constructor(protected apiService: TmdbApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.homeMovies$.next(this.route.snapshot.data["allMoviesResolver"].results);
  }

  verifySearchMovies() {
    return this.apiService.validateSearchMoviesObj();
  }

  showHomeMovies() {
    return this.apiService.getShowHomeMovies();
  }

  fetchMovies(page: number): void {
    this.apiService.fetchMovies(page);
  }

  onNext(): void {    
    this.apiService.nextPage();
  }

  onPrevious(): void {
    this.apiService.previousPage(); 
  }
}