import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbApiService } from 'src/app/tmdbApi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  searchText = '';

  constructor(private apiService: TmdbApiService, private router: Router) {}

  onSearchChange(text: string) {

    if (!text) return

    this.searchText = text
    
    this.apiService.setQueryText(text);
    
    this.router.navigate([`/search/${text}`])
    this.searchText = ''
  }
}
