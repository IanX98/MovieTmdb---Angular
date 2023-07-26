import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbApiService } from 'src/app/tmdbApi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class Search implements OnInit {

    query!: string;
    searchedMovies!: any;

    constructor(private apiService: TmdbApiService, private route: ActivatedRoute) {}

    verifyMoviesLength() {
      if (this.searchedMovies?.results.length > 0) {
        return true;
      } 
  
      return false;
    }

    ngOnInit() {
      this.query = this.apiService.getQueryText()

      this.route.params.subscribe(
        (params: Params) => {
          this.query = params['string'];
          this.apiService.searchMovies(this.query).subscribe(
            (response) => {
              this.searchedMovies = response;
            },
            (error) => {
              console.error(error);
            }
          );
        }
      );
    }
  }