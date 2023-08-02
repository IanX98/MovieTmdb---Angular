import { Component } from '@angular/core';
import { TmdbApiService } from 'src/app/tmdbApi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  searchText = '';

  constructor(private apiService: TmdbApiService) {}

  onSearchChange(text: any): void {
    this.validateSearchText(text);
      
    this.apiService.searchText(text)
    this.searchText = ''
  }

  validateSearchText(text: string): void {
    text = text.trim()
    if (text === '') {
      return;
    } 
  }

  showHomeMovies() {
    this.apiService.setShowHomeMovies(true);
  }
}
