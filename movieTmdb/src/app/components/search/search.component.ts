import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbApiService } from 'src/app/tmdbApi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class Search implements OnInit {

    query!: string;

    constructor(protected apiService: TmdbApiService, private route: ActivatedRoute) {}

    verifySearchMovies() {
      return this.apiService.validateSearchMoviesObj();
    }

    ngOnInit(): void {
      this.query = this.apiService.getQueryText()

      this.route.params.subscribe(
        (params: Params) => {
          this.query = params['string'];
          this.apiService.getSearchObj(this.query);
        }
      );
    }
  }
