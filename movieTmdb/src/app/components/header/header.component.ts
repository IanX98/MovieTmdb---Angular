import { Component } from '@angular/core';
import { TmdbApiService } from 'src/app/tmdbApi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  searchText = '';

  constructor(private apiService: TmdbApiService) {}

  onSearchChange(text: any): void {
    this.validateSearchText(text);
      
    this.apiService.setSearchText(text);
    this.searchText = '';
  }

  validateSearchText(text: string): void {
    text = text.trim()
    if (text === '') {
      return;
    } 
  }
}
